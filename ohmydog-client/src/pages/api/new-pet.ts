import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log('ESTOS SON LOS DATOS QUE SE ENVIARÁN', req.body)
    try {
        const extRes = await axios.post(
            'http://localhost:7162/api/mascota',
            req.body,
            {
                headers: {
                    Authorization: `${req.headers.authorization}`
                }
            }
        )
        if (extRes.status === 200) {
            res.status(200).json(true)
        }
    } catch (err) {
        try {
            const jsonSvRes = await axios.get('http://localhost:3001/new-pet')
            res.status(200).json(jsonSvRes.data)
        } catch (err) {
            res.status(200).json(false)
        }
    }
}