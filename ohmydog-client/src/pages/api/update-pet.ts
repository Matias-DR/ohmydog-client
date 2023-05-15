import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const extRes = await axios.post(
            'http://localhost:7162/api/mascota',
            req.body.data,
            {
                headers: {
                    Authorization: `Bearer ${req.headers.authorization}`
                }
            }
        )
        res.status(200).json(true)
    } catch (err) {
        try {
            const jsonSvRes = await axios.post('http://localhost:3001/update-pet')
            res.status(200).json(jsonSvRes.data)
        } catch (err) {
            res.status(200).json(false)
        }
    }
}