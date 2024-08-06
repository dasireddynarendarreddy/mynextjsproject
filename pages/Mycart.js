import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MyCart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
        const value="cart"
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/server?name=${value}`);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>My Cart</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Image src={product.image_link} alt={product.name} width={300} height={200}/>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
