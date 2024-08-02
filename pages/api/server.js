import items from "./data";

export default function handler(req, res) {
  console.log("the url is",req.query)
     const id=parseInt(req.query.id)
     console.log(req.query)
  if (req.method === 'GET'&&req.query.id!=undefined) {
    res.status(200).json([items[id-1]]);
  } else if(req.method=='GET') {
    res.status(200).json(items) // Method Not Allowed
  }
}
