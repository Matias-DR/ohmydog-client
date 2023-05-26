import { CookieSerializeOptions } from 'cookie'

const signoutTokenCookieOptions: CookieSerializeOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
    maxAge: 0,
    path: '/',
}

export default signoutTokenCookieOptions