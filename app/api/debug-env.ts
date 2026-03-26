import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    hasApiKey: !!process.env.RESEND_API_KEY,
    email: process.env.CONTACT_TO_EMAIL || null,
  });
}
