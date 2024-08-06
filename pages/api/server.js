import items from "./data";
import prisma from '../../lib/prisma';
import cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

const corsMiddleware = initMiddleware(
  cors({
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: '*', // Adjust to your needs (e.g., `https://your-frontend-domain.com`)
  })
);

export default async function handler(req, res) {
  await corsMiddleware(req, res);
  const { id, name } = req.query;

  console.log('Request Method:', req.method);
  console.log('Query Parameters:', req.query);
  console.log('Request Body:', req.body);

  if (req.method === 'GET') {
    if (id !== undefined) {
      const itemId = parseInt(id);
      if (isNaN(itemId) || itemId < 1 || itemId > items.length) {
        res.status(404).json({ error: 'Item not found' });
      } else {
        res.status(200).json([items[itemId - 1]]);
      }
    } else if (name === 'notcart') {
      res.status(200).json(items);
    } else if (name === 'cart') {
      try {
        const products = await prisma.cart.findMany();
        res.status(200).json(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Error fetching products' });
      } finally {
        await prisma.$disconnect();
      }
    } else {
      res.status(400).json({ error: 'Invalid query parameters' });
    }
  } else if (req.method === 'POST') {
    const { product_id, name, description, price, image_link, category, sizes, colors } = req.body;

    if (!product_id || !name || !description || !price || !image_link || !category || !sizes || !colors) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const newCart = await prisma.cart.create({
        data: {
          product_id, // Corrected here
          name,
          description,
          price,
          image_link,
          category,
          sizes: JSON.stringify(sizes),
          colors: JSON.stringify(colors),
        },
      });
      res.status(201).json(newCart);
    } catch (error) {
      
      if (error.code === 'P2002') {
        res.status(200).json({ status: "alreadyadded" });
      } else {
          console.log(error)
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
