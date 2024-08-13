

import { useRouter } from 'next/router';
import Image from 'next/image';
import items from "../api/data";
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



export default function Home() {
  
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const[response,setresponse]=React.useState("adding to cart")
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      router.push('/Mycart')
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
       viewcart
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
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
      <div className="flex flex-wrap gap-14 p-4">
        {items.map((product) => (
          <div key={product.product_id}>
            <div className="bg-slate-200 p-4 text-center cursor-pointer rounded-lg object-contain h-auto hover:bg-slate-600 hover:text-white" onClick={() => router.push(`/products/${product.product_id}`)}>
              <Image src={product.image_link} alt={product.description} width={500} height={300} />
              <p>Name: {product.name}</p>
              <p>{product.price}</p>
            </div>
            <div>
            <Button onClick={()=>addToCart(product)} className='bg-yellow-300 rounded-xl text-black'>Add To Cart</Button>
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
