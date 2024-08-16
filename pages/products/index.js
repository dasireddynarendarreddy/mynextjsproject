

import { useRouter } from 'next/router';
import Image from 'next/image';
import items from "../api/data";
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Home() {
  
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const[response,setresponse]=React.useState("adding to cart")
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      
    }

    setOpen(false);
  };
  const goToCart=()=>{
    
    router.push("/Mycart")

  }
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={()=>goToCart()}>
       viewcart
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" onClick={handleClose}/>
      </IconButton>
    </React.Fragment>
  );

  const addToCart = async (product) => {
    console.log("adding to database...", product);
    try {
      const response = await fetch('/api/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
        setresponse(data.status)
        setOpen(true)
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  return (
    <div className="p-8">
      <button onClick={() => router.push("/")} className="bg-slate-600 font-extrabold text-2xl py-4 px-6 rounded-lg">&#8592;</button>
      <div className="grid xl:grid-cols-2 md:grid-cols-1 flex-wrap gap-2 p-1">
        {items.map((product) => (
          <div key={product.product_id}>
            <div className="flex gap-2 p-4 text-center  rounded-lg object-contain h-auto" >
              <div className='cursor-pointer'>
              <Image src={product.image_link} alt={product.description} width={100} height={75} className="object-cover" onClick={() => router.push(`/products/${product.product_id}`)}/>
             
              </div>
              <div className='font-extrabold'>
              <p>Name: {product.name}</p>
              <p>price:{product.price}$</p>
              <p>Rtaing <Rating name="read-only" value={4} readOnly /></p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 cursor-pointer' onClick={()=>addToCart(product)}>AddToCart</button>
              </div>
              
            </div>
            <div className='md:w-full h-2 bg-slate-300'></div>
            <div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={response}
        action={action}
      />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
