import { CookieSerializeOptions } from 'cookie'

const signinTokenCookieOptions: CookieSerializeOptions = {
    httpOnly: false,
    // secure: process.env.NODE_ENV === 'production',
    secure: false,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 días
    path: '/',
}

export default signinTokenCookieOptions