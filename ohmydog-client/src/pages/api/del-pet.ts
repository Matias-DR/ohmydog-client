import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const extRes = await axios.delete(
            `http://localhost:7162/api/mascota/${req.body.id}`,
            {
                headers: {
                    Authorization: `${req.headers.authorization}`
                }
            }
        )
        if (extRes.status === 200) {
            res.status(200).json(true)
        } else {
            res.status(200).json(false)
        }
    } catch (err) {
        res.status(200).json(false)
    }
}