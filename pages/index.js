import { useRouter } from "next/router"
function Main()
{
       const route=useRouter();
         const viewProducts=()=>{
              route.push("/products")
         }

    return(
        <>
           <div className="bg-slate-500 flex gap-2 p-4">
               <span><a href="/Mycart">products</a></span>
               <span><a href="">mycart</a></span>
           </div>
             <button className="bg-blue-600 rounded p-2" onClick={viewProducts}>ViewProducts</button>
        </>
    )
}
export default Main