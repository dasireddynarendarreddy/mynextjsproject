import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Button from '@mui/material/Button';
const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const[response,setresponse]=useState()
  const[open,setOpen]=useState(false)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
      console.log(data)
        setresponse(data.status)
        setOpen(true)
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };
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


  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          setLoading(true);

          // Adding CORS-related headers to the fetch request
          const response = await fetch(`/api/server?num=${id}`, {
            method: 'GET',
            headers: {
             
              'Access-Control-Allow-Origin': '*', // Allow requests from any origin
              'Access-Control-Allow-Methods': 'GET', // Allow the necessary methods
              'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Specify which headers are allowed
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const result = await response.json();
          setProduct(result);
          console.log(result);
        } catch (error) {
          setError(product);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) return <div className="border-2 w-6 h-6 border-solid rounded-xl animate-spin border-cyan-300 border-x-white"></div>;
  if (error) return <p>Error: {error.message}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div>
      <button className='bg-blue-700 rounded-lg p-4' onClick={() => router.push("/products")}>Previous</button>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <Image src={product.image_link} width={500} height={300} className='rounded-lg w-auto h-auto' alt={product.name} />
          <p>Colors: {product.colors}</p>
          <p>Sizes: {product.sizes}</p>
          <p>Rating:{product.rating}</p>
          <button className='bg-yellow-400 rounded-lg p-4' onClick={()=>addToCart(product)}>AddToCart</button>
          <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={response}
        action={action}
      />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
