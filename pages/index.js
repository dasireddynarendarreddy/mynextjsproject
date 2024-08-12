import { useRouter } from "next/router"
import Link from "next/link"
import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Main()
{
  const[items,setitems]=React.useState(null)
       const route=useRouter();
         const viewProducts=()=>{
              route.push("/products")
         }
    React.useEffect(()=>{
      const get=async()=>{
      const getNoOfItems=await fetch('/api/getNoOfitems');
      const number=await getNoOfItems.json()
       setitems(number.noofitems)
      }
       get()
    },[])
    return(
<div className="p-4 items-center justify-center">

      <div className="bg-slate-500 flex gap-2 p-4  ">
        
        <span className="hover:text-yellow-400"><Link href="/Mycart">
        <Badge badgeContent={items} color="primary">
      <AddShoppingCartIcon fontSize="large" color="action" />
    </Badge></Link></span>
      </div>
      <div className="bg-hero h-screen bg-center w-full bg-cover bg-no-repeat items-center  justify-center text-center">
  <div className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono text-slate-600">
    Walk with Confidence: Discover footwear that combines cutting-edge design with unparalleled comfort, making every step a statement
  </div>

  <button className="bg-blue-600 rounded-lg p-2 sm:p-3 md:p-4 lg:p-5 mt-4" onClick={viewProducts}>
    View Products
  </button>
</div>

      
    </div>
    )
}
export default Main