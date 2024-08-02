import { useRouter } from "next/router"
function invalidUrl()
{
    const route=useRouter();
    console.log(route.pathname);

    return(
        <div>
          <h1>invalid url</h1>
        </div>
    )
}
export default invalidUrl