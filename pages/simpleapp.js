import { useState, useEffect } from "react";
import styles from "@/styles/hello.module.css";

export default function SimpleApp({ finalresult }) {
  const [result, setResult] = useState([]);
  const [side, setSide] = useState(false);

  useEffect(() => {
    if (finalresult.status === 'ok') {
      setResult(finalresult.articles);
    }
  }, [finalresult]);

  const showSideBar = () => {
    setSide(true);
  };

  const closeSideBar = () => {
    setSide(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.show}>
        <span>
          <button onClick={showSideBar}>Show Sidebar</button>
        </span>
        <div id="sidebar" className={`w-96 h-screen bg-black fixed top-0 ${side ? "translate-x-0" : "-translate-x-96"} transition-transform duration-300 ease-in-out`}>
          <button className="bg-blue-500 text-white" onClick={closeSideBar}>Close</button>
          {/* Sidebar content here */}
        </div>
      </div>
      <div className={styles.content}>
        {result.map((res, index) => (
          <div className={styles.child}
          key={index}>
            <p>Author:{res.author}</p>
            <p>Title:{res.title}</p>
            <p className={styles.time}>{res.publishedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://newsapi.org/v2/everything?q=football&from=2024-07-01&sortBy=popularity&apiKey=5fe8d603dbcb45d0b62546100b957bf4");
  const finalresult = await res.json();
  console.log(finalresult);

  return {
    props: {
      finalresult,
    },
  };
}
