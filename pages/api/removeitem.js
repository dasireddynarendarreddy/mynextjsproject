import { PrismaClient } from '@prisma/client';
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';
const prisma = new PrismaClient();
const cors = initMiddleware(
    Cors({
      // Only allow requests with these methods
      methods: ['GET', 'POST', 'OPTIONS'],
      origin: 'https://mynextjsproject-phi.vercel.app/products' // Adjust to your needs
    })
  );

export default async function handler(req, res) {
    await cors(req, res);
  if (req.method === 'DELETE') {
    console.log(req.body)
    const { name } =req.body;
             console.log(name)
    try {
      // Ensure the ID is provided and valid
      

      const deletedItem = await prisma.addToCart.deleteMany({
        where: {name:name},
      });

      res.status(200).json({ message: 'Item deleted successfully', deletedItem });
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Error deleting item', details: error.message });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
