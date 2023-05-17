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
                    Authorization: `Bearer ${req.headers.authorization}`
                }
            }
        )
        if (extRes.status === 200) {
            console.log('ESTE ES EL RES 200 EN CHANGE-USER-DATA:', extRes.data)
            res.status(200).json(true)
        }
    } catch (err: AxiosError | Error | any) {
        console.log('ESTE ES EL ERROR EN CHANGE-USER-DATA:', err)
        res.status(200).json(err.response.data)
        // JSON SERVER
        // try {
        //     const jsonSvRes = await axios.get('http://localhost:3001/change-user-data')
        //     res.status(200).json(jsonSvRes.data)
        // } catch (err) {
        //     res.status(200).json(false)
        // }
    }
}