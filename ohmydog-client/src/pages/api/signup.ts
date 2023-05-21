import type { NextApiRequest, NextApiResponse } from 'next'
import { axiosInstance } from '@/utilities/unlimited-size-axios.utility'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const extRes = await axiosInstance.post(
            'http://localhost:7162/api/register',
            req.body
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