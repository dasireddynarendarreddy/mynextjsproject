import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          setLoading(true);

          // Adding CORS-related headers to the fetch request
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/server?num=${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*', // Allow requests from any origin
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Allow the necessary methods
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
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div>
      <button className='bg-blue-700 rounded-lg p-4' onClick={() => router.push("/products")}>Previous</button>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <Image src={product.image_link} width={500} height={300} className='rounded-lg' alt={product.name} />
          <p>Colors: {product.colors}</p>
          <p>Sizes: {product.sizes}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
