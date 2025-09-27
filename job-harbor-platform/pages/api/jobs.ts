import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    
    const query = req.url?.split("?")[1] || "";

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/${query ? `?${query}` : ""}`
    );

    if (!response.ok) {
      throw new Error("failed to fetch jobs");
    }

    const data = await response.json();

    
    res.status(200).json({
      jobs: data.results || data,
      next: data.next,
      previous: data.previous,
      count: data.count,
    });
  } catch (error) {
    console.error("Error fetching jobs", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

export default handler;


