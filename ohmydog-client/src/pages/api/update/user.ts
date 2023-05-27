import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { updateUserAdapter } from './adapters'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { token } = req.cookies
    const body = updateUserAdapter(req.body)
    axios.patch(
        'http://localhost:7162/api/cliente',
        body,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
    )
        .then((extRes) => res.status(200).json({ message: 'Datos guardados' }))
        .catch((err: any) => {
            err.response.data ?
                res.status(400).json({ message: err.response.data })
                : res.status(500).json({
                    message: 'Error de conexión, por favor intente más tarde'
                })
        })
}