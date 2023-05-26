import { signoutTokenCookieOptions } from './lib'
import { serialize } from 'cookie'
import type {
    NextApiRequest,
    NextApiResponse
} from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { token } = req.cookies
    if (!token) {
        return res.status(401).json({
            message: 'No se encuentra una sesión activa'
        })
    } else {
        const serialized = serialize(
            'token',
            '',
            signoutTokenCookieOptions
        )
        res.setHeader('Set-Cookie', serialized);
        res.status(200).json({
            message: 'Sesión cerrada'
        })
    }
}