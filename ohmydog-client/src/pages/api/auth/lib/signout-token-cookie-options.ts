import { CookieSerializeOptions } from 'cookie'

const signoutTokenCookieOptions: CookieSerializeOptions = {
    httpOnly: false,
    // secure: process.env.NODE_ENV === 'production',
    secure: false,
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
}

export default signoutTokenCookieOptions