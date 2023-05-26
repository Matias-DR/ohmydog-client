import {
    credentialAdapter,
    userAdapter,
    petsAdapter,
    tokenAdapter
} from './adapters'
import { signinTokenCookieOptions } from './lib'
import { serialize } from 'cookie'
import axios from 'axios'
import type {
    NextApiRequest,
    NextApiResponse
} from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const credential = credentialAdapter(req.body)
    axios.post(
        'http://localhost:7162/api/login',
        credential
    )
        .then(xres => {
            if (xres.status === 200) {
                const token = tokenAdapter(xres.data)
                const user = userAdapter(xres.data)
                const pets = petsAdapter(xres.data)
                const body = {
                    user,
                    pets
                }
                const serialized = serialize(
                    'token',
                    token,
                    signinTokenCookieOptions
                )
                res.setHeader('Set-Cookie', serialized);
                res.status(200).json(body)
            }
        })
        .catch(err => {
            // 401: Credenciales inválidas
            // 403: Credenciales inválidas
            // 404: Usuario no encontrado
            if ([401, 403, 404].includes(err.response.status)) {
                res.status(err.response.status).json({
                    message: 'Datos inválidos'
                })
            }
            else {
                res.status(500).json({
                    message: 'Error de conexión'
                })
            }
        })
}