// pages/api/categories.ts
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/`);

    if (!response.ok) {
      return res.status(response.status).json({ error: `Failed to fetch categories, status ${response.status}` });
    }

    const data = await response.json();

    // Assuming categories array is directly in data or in data.categories
    const categories = Array.isArray(data.results) ? data.results : data;

    res.status(200).json({ categories });
  } catch (error) {
    console.error("Error fetching categories", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export default handler;
