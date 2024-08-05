import items from "./data";
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const { id, name } = req.query;

  if (req.method === 'GET') {
    if (id !== undefined) {
      // Handle GET request for a specific item by ID
      const itemId = parseInt(id);
      if (isNaN(itemId) || itemId < 1 || itemId > items.length) {
        res.status(404).json({ error: 'Item not found' });
      } else {
        res.status(200).json([items[itemId - 1]]);
      }
    } else if (name === 'notcart') {
      // Handle GET request for all items
      res.status(200).json(items);
    } else if (name === 'cart') {
      // Handle GET request for items in the cart
      try {
        const products = await prisma.cart.findMany();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
      } finally {
        await prisma.$disconnect();
      }
    } else {
      res.status(400).json({ error: 'Invalid query parameters' });
    }
  } else if (req.method === 'POST') {
    const { product_id, name, description, price, image_link, category, sizes, colors } = req.body;

    // Basic validation
    if (!product_id || !name || !description || !price || !image_link || !category || !sizes || !colors) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const newCart = await prisma.cart.create({
        data: {
          Product_id: product_id,
          name,
          description,
          price,
          image_link,
          category,
          sizes: JSON.stringify(sizes), // Convert arrays to JSON strings
          colors: JSON.stringify(colors), // Convert arrays to JSON strings
        },
      });
      res.status(201).json(newCart);
    } catch (error) {
      console.error('Failed to create cart item:', error);
      if (error.code === 'P2002') {
        res.status(200).json({ status: "alreadyadded" });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
