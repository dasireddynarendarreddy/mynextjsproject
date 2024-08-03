import { useRouter } from "next/router"
function Main()
{
       const route=useRouter();
         const viewProducts=()=>{
              route.push("/products")
         }

    return(
        <>
           <h1>Main page</h1>
             <button className="bg-blue-600 rounded p-2" onClick={viewProducts}>ViewProducts</button>
        </>
    )
}
export default Main