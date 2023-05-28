import { petFromAdapter, petToAdapter } from '@/adapters'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body = petToAdapter(req.body)
    const token = req.cookies.token
    axios.post(
        'http://localhost:7162/api/mascota',
        body,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
        .then((response) => {
            const pet = petFromAdapter(response.data)
            res.status(200).json(pet)
        })
        .catch((err) => {
            const message = err.response.data
            res.status(500).json({ message })
        })
}