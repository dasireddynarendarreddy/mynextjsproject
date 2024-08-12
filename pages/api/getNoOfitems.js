import prisma from "lib/prisma"
export default  async function getNoOfItems(req,res)
{
   if(req.method==="GET")
   {
           try{
            const items=await prisma.addToCart.count()
            res.status(200).json({noofitems:items})
           }
           catch(error)
           {
            res.status(500).json({error:error})
           }
   }
}