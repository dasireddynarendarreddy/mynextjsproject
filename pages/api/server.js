import prisma from '../../lib/prisma';
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
import items from './data';

// Initialize the CORS middleware
const cors = initMiddleware(
  Cors({
    // Only allow requests with these methods
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: 'https://mynextjsproject-phi.vercel.app/products' // Adjust to your needs
  })
);

export default async function handler(req, res) {
  // Run the middleware
  await cors(req, res);

  const { num } = req.query;
  console.log('Request method:', req.method);
  console.log('Request body:', req.body);
  
  if (req.method === 'GET') {
    if (num === undefined) {
      try {
        const product = await prisma.addToCart.findMany();
        res.status(200).json(product);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(200).json(items[num - 1]);
    }
  } else if (req.method === 'POST') {
    const { product_id, name, description, price, image_link, category, sizes, colors } = req.body;

    try {
      await prisma.addToCart.create({
        data: {
          product_id,
          name,
          description,
          price, // Ensure price is a float
          image_link,
          category,
          sizes,
          colors,
        },
      });
      

      res.status(201).json({ status: 'addedtocart' });
    } catch (error) {
      console.log("the error code is", error.code);
      if (error.code === 'P2002') {
        res.status(200).json({ status: 'addedtocart' });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
}