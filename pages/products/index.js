import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import items from "../api/data"

export default function Home() {
  
  
  
    const router=useRouter()
  
  const addToCart = async (product) => {
    try {
      const res = await fetch('/api/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const response = await res.json();
      console.log("Response:", response);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
              <button className="bg-yellow-400 rounded p-2 cursor-pointer" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
