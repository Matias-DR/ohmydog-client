import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const extRes = await axios.post(
            'http://localhost:7162/api/get-password',
            req.body
        )
        if (extRes.status === 200) {
            res.status(200).json(extRes.data)
        }
    } catch (err) {
        try {
            const jsonSvRes = await axios.get(
                'http://localhost:3001/get-current-password'
            )
            res.status(200).json(jsonSvRes.data)
        } catch (err) {
            res.status(200).json(false)
        }
    }
}