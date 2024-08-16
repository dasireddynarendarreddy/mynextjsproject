import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function MyCart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router=useRouter()
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
    <div className="grid xl:grid-cols-4 md:grid-cols-2 font-extrabold">
    
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.product_id} className='m-0'>
            <h2>{product.name}</h2>
           
            <p>{product.price}</p>
            <Image src={product.image_link} alt={product.name} width={200} height={100} className='rounded-xl'/>
            <button className='bg-yellow-400  p-2 font-semibold rounded-xl' onClick={()=>removeItem(product.name)}>RemoveItem</button>
           </div>
           
           
           
         
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
