import axios, { AxiosError } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const id = req.body.id;
        const extRes = await axios.delete(
            `http://localhost:7162/api/mascota/${id}`,
            {
                headers: {
                    Authorization: `${req.headers.authorization}`
                }
            }
        )
        if (extRes.status === 200) {
            res.status(200).json(true)
        }
    } catch (err: Error | AxiosError | any) {
        res.status(200).json(false)
    }
}