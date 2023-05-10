import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        console.log("ABER SI ENTRA", req.body)
        const extRes = await axios.post(
            'http://localhost:7162/api/register',
            req.body
        )
        res.status(200).json(extRes.data)
    } catch (err) {     
        console.log("ESTO ES EL ERROR XD ", err)
        try {
            const jsonSvRes = await axios.get('http://localhost:3001/signup')
            res.status(200).json(jsonSvRes.data)
        } catch (err) {
            res.status(500).json({ token: '', refresh: '' })
        }
    }
}