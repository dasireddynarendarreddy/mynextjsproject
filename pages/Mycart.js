import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MyCart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router=useRouter()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchProducts() {
      
      try {
        const response = await fetch('/api/server')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);
  const removeItem = async (item) => {
    try {
      const response = await fetch(`/api/removeitem`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name:item}),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      if(result.deletedItem.count>0)
      {
        router.refresh()
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  if (loading) return <div  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1">
    
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.product_id} className='p-2 cursor-pointer' >
            <h2>{product.name}</h2>
           
            <p>{product.price}</p>
            <Image src={product.image_link} alt={product.name} width={200} height={100} className='rounded-xl' onClick={()=>router.push(`/products/${product.product_id}`)}/>
            
            <Button variant="outlined" className='cursor-pointer' onClick={handleClickOpen}>
        Remove item
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remove item From Cart"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are You Sure you Want to Remvoe from cart
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={()=>removeItem(product.name)} autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
           </div>
           
           
           
         
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
