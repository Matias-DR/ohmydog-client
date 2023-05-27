import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const extRes = await axios.patch(
            `http://localhost:7162/api/mascota/${req.body.id}`,
            { ...req.body },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${req.headers.authorization}`
                }
            }
        )
        if (extRes.status === 200 || extRes.status === 204) {
            res.status(200).json(extRes.data)
        } else {
            res.status(200).json(false)
        }
    } catch (err) {
        res.status(200).json(false)
    }
}