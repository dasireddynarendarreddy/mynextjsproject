import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from 'next/image';
function Product() {
  const [data, setData] = useState([]);
  const router = useRouter();
  
  const num = router.query.id;
  
  useEffect(() => {
    const fetchData = async () => {
      const get = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/server?id=${num}`);
      const response = await get.json();
      setData(response);
      console.log(response);
    };
    if (num) {
      fetchData();
    }
  }, [num]);

  const previous = () => {
    router.push("/products");
  };const addToCart = async (product) => {
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
  }

  return (
    <>
      <div className="bg-gray-200">
      <button onClick={previous} className="bg-slate-600 font-extrabold text-2xl py-4 px-6 rounded-lg">&#8592;</button>

        {data.map((res) => (
          <div key={res.id} className="flex items-center justify-center h-screen">
            <div className="text-center">
              <Image src={res.image_link} alt="Your Image" width={500} height={300} />
              <h3 className="font-extrabold">Name: {res.name}</h3>
              <br />
              <span>Category:</span>
              <span className="bg-green-300 font-bold p-2 rounded-lg">{res.category}</span>
              <p className="mt-4">{res.description}</p>
              <div className="flex space-x-2 mt-4">
                <span className="font-extrabold">colors:</span>
                {res.colors.map((col, index) => (
                  
                  <div
                    key={index}
                    className="w-10 h-10 rounded-md border-2 border-solid"
                    style={{ backgroundColor: col }}
                  ></div>
                ))}
              </div>
              <button className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-300 mt-4" onClick={()=>addToCart(res)}>Add to Cart</button>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
}

export default Product;
