import { NextApiRequest, NextApiResponse } from 'next';

const CATEGORIES = ['ALL', 'HTML/CSS', 'JavaScript', 'React', 'Next.js'];

export default function handler(req: NextApiRequest, res: NextApiResponse<string[]>) {
    if (req.method === 'GET') {
        res.status(200).json(CATEGORIES);
    }
}
