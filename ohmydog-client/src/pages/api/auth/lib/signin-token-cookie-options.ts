import { CookieSerializeOptions } from 'cookie'

const signinTokenCookieOptions: CookieSerializeOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 días
    path: '/signin',
}

export default signinTokenCookieOptions