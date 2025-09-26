import { NextApiRequest,NextApiResponse } from "next";

const handler = async (req:NextApiRequest, res:NextApiResponse) => {

try{
  const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/`);
  const data = await respone.json();

   res.status(200).json({jobs:data.results})
}catch(error){
  console.error("Error fetching jobs", error)
   res.status(500).json({ error: "Failed to fetch jobs" });

}
 
}
export default handler
