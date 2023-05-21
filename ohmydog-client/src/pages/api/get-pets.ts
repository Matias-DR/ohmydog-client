import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const extRes = await axios.get(
            'http://localhost:7162/api/mascota',
            {
                headers: {
                    Authorization: `${req.headers.authorization}`
                }
            }
        )
        if (extRes.status === 200) {
            res.status(200).json(extRes.data)
        } else {
            res.status(200).json(false)
        }
    } catch (err: any) {
        console.log(err.response)
        res.status(200).json(false)
    }
}