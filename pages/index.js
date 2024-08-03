import { useRouter } from "next/router"
import Link from "next/link"
function Main()
{
       const route=useRouter();
         const viewProducts=()=>{
              route.push("/products")
         }

    return(
        <>
           <div className="bg-slate-500 flex gap-2 p-4">
               <span><Link href="/Mycart"><a>products</a></Link></span>
               <span><Link href=""><a>mycart</a></Link></span>
           </div>
             <button className="bg-blue-600 rounded p-2" onClick={viewProducts}>ViewProducts</button>
        </>
    )
}
export default Main