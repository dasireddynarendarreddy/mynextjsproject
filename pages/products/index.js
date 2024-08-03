import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import  styles from '@/styles/index.module.css'
export default function Home() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const get = async () => {
      try {
        const res = await fetch(`/api/server`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const response = await res.json();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };
    get();
  }, []);
  const showProduct = ( id) => {
    //router.push(`/${id}`);
    router.push(`/products/${id}`);
  };
  const preivous=()=>{
    router.push("/");
  }
  

  return (
    <div className="flex flex-wrap gap-14 p-4" >
        
      {data.map((res) => (
        <div key={res.product_id} className="bg-slate-200 p-4 text-center cursor-pointer rounded-lg object-contain h-auto hover:bg-slate-600 hover:text-white" onClick={()=>showProduct(res.product_id)}>
         
          <Image src={res.image_link} alt={res.description} width={500} height={300}/>
            <p>Name:{res.name},name</p>
          <p>{res.price}</p>
            <button className="bg-yellow-400 rounded p-2">AddToCart</button>
        </div>
      ))}
    </div>
  );
}
