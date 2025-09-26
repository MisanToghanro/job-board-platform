// pages/api/job.ts
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/`);

    if (!response.ok) {
      // Handle non-200 responses explicitly
      return res.status(response.status).json({ error: `Failed to fetch jobs, status ${response.status}` });
    }

    const data = await response.json();

    // Check if data.results exists, otherwise fallback to data itself
    const jobs = Array.isArray(data.results) ? data.results : data;

    res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

export default handler;
