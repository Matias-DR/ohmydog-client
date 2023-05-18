import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const extRes = await axios.post(
            'http://localhost:7162/api/register',
            req.body
        )
        if (extRes.status === 200) res.status(200).json(true)
    } catch (err) {
        console.log(err)
        try {
            const jsonSvRes = await axios.get('http://localhost:3001/signup')
            res.status(200).json(jsonSvRes.data)
        } catch (err) {
            res.status(200).json(false)
        }
    }
}