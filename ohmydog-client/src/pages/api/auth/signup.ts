import { signupToAdapter } from '@/adapters'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body = signupToAdapter(req.body)
    console.log(body)
    axios.post(
        'http://localhost:7162/api/register',
        body
    )
        .then(xres => res.status(200).json({
            message: 'Usuario registrado'
        }))
        .catch(err => {
            console.log(err.response.data)
            if (err.response.data) {
                res.status(409).json({
                    message: 'Usuario ya registrado'
                })
            }
            else {
                res.status(500).json({
                    message: 'Error al crear el usuario, por favor intente más tarde'
                })
            }
        })
}