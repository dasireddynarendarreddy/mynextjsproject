import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState([]);
  const router = useRouter();
  
  const num = router.query.id;
  
  useEffect(() => {
    const fetchData = async () => {
      const get = await fetch(`/api/server?id=${num}`);
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
  };

  return (
    <>
      <div className="bg-gray-200">
      <button onClick={previous} className="mt-4 p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-300">previous</button>
        {data.map((res) => (
          <div key={res.id} className="flex items-center justify-center h-screen">
            <div className="text-center">
              <img src={res.image_link} className="w-96 h-96" alt="Your Image" />
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
              <button className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-300 mt-4">Add to Cart</button>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
}

export default Product;
