import axios, { AxiosError } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const extRes = await axios.patch(
            'http://localhost:7162/api/cliente',
            req.body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: req.headers.authorization
                }
            }
        )
        res.status(200).json(extRes.data)
    } catch (err: any) {
        err.response.data ?
        res.status(200).json(err.response.data)
        : res.status(200).json(false)
    }
}