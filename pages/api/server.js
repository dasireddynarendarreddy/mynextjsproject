import items from './data';
import prisma from '../../lib/prisma';
import cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

/*const corsMiddleware = initMiddleware(
  cors({
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: 'https://mynextjsproject-phi.vercel.app/', // Adjust to your needs
  })
);*/

{/*export default async function handler(req, res) {
  await corsMiddleware(req, res);
  const {num}=req.query;
    console.log(num)
  
  if(req.method==='GET')
  {
     try{
       const result=await prisma.Cart.findMany()
       res.status(200).json(result)
     }
     catch(error)
     {
       res.status(500).json(error)

     }
          
  }


   // Check if this logs correctly

}*/}



export default async function handler(req, res) {
  const { num } = req.query;

  if (req.method === 'GET') {
    if(num===undefined)
    {
    try {
      const product = await prisma.addToCart.findMany();

      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  else{
     res.status(200).json(items[num-1])
  }
  } else if (req.method === 'POST') {
    const {
      product_id,
      name,
      description,
      price,
      image_link,
      category,
      sizes,
      colors
    } = req.body;

    try {
   await prisma.addToCart.create({
        data: {
          product_id,
          name,
          description,
          price,  // Ensure price is a float
          image_link,
          category,
          sizes,
          colors
        },
      });

      res.status(201).json({staus:"addedtocart"});
    } catch (error) {
      console.log("the error code is",error.code)
       if(error.code==='P2002')
       {
        res.status(200).json({ status: 'addedtocart' });
       }
       else{
      res.status(500).json({ error: 'Internal Server Error' });
       }
    }
  }
}
