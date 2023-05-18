import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        console.log('ESTA ES LA DATA QUE LLEGA A MI SV', { ...req.body, id: req.body.id })
        const extRes = await axios.patch(
            `http://localhost:7162/api/mascota/${req.body.id}`,
            { ...req.body },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${req.headers.authorization}`
                }
            }
        )
        res.status(200).json(true)
    } catch (err) {
        console.log('ESTE ES EL ERROR EN UPDATE-PET:', err)
        try {
            const jsonSvRes = await axios.post('http://localhost:3001/update-pet')
            res.status(200).json(jsonSvRes.data)
        } catch (err) {
            res.status(200).json(false)
        }
    }
}