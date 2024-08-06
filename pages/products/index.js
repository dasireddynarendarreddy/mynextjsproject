import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import styles from '@/styles/index.module.css';

export default function Home() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchItems = async () => {
      console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
      const name = 'notcart';
      try {
        const res = await fetch(`/api/server?name=${name}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const response = await res.json();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };
    fetchItems();
  }, []);

  const showProduct = (id) => {
    router.push(`/products/${id}`);
  };

  const goToHome = () => {
    router.push("/");
  };

  const addToCart = async (product) => {
    try {
      const res = await fetch("/api/server", {
        method: "POST",
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

  return (
    <div className="p-8">
      <button onClick={goToHome} className="bg-slate-600 font-extrabold text-2xl py-4 px-6 rounded-lg">&#8592;</button>
      <div className="flex flex-wrap gap-14 p-4">
        {data.map((product) => (
          <div key={product.product_id}>
            <div className="bg-slate-200 p-4 text-center cursor-pointer rounded-lg object-contain h-auto hover:bg-slate-600 hover:text-white" onClick={() => showProduct(product.product_id)}>
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
