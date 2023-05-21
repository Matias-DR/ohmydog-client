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
        if (extRes.status === 200) {
            res.status(200).json(extRes.data.mensaje)
            // res.status(200).json(extRes.data.mensaje)
        }
    } catch (err: AxiosError | Error | any) {
        if (err.response.status === 500)
            res.status(200).json(false)
        else if (err.response.status === 400)
            res.status(200).json(err.response.data)
    }
}