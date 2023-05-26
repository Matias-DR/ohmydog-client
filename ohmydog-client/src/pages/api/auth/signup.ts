import { signupAdapter } from './adapters'
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body = signupAdapter(req.body)
    console.log('data', body)
    axios.post(
        'http://localhost:7162/api/register',
        body
    )
        .then(xres => res.status(200).json({
            message: 'Usuario registrado'
        }))
        .catch(err => {
            if (err.response.data) {
                res.status(409).json({
                    message: 'El usuario ya se encuentra registrado con ese email'
                })
            }
            else {
                res.status(500).json({
                    message: 'Error al crear el usuario, por favor intente más tarde'
                })
            }
        })
}