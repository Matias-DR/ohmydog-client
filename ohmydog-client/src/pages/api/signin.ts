import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log('SIGNIN - REQ.BODY', req.body)
    try {
        const extRes = await axios.post(
            'http://localhost:7162/api/login',
            req.body
        )
    } catch (err) {
        try {
            const jsonSvRes = await axios.get('http://localhost:3001/signin')
            res.status(200).json(jsonSvRes.data)
        } catch (err) {
            res.status(500).json({ token: '', refresh: '' })
        }
    }
}