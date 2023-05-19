import type { NextApiRequest, NextApiResponse } from 'next'
import { axiosInstance } from '@/utilities/unlimited-size-axios.utility'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log('LLEGA')
    try {
        const extRes = await axiosInstance.post(
            'http://localhost:7162/api/register',
            req.body
        )
        if (extRes.status === 200) res.status(200).json(true)
        if (extRes.status === 413) res.status(200).json(false)
    } catch (err) {
        console.log(err)
        try {
            const jsonSvRes = await axiosInstance.get('http://localhost:3001/signup')
            res.status(200).json(jsonSvRes.data)
        } catch (err) {
            res.status(200).json(false)
        }
    }
}