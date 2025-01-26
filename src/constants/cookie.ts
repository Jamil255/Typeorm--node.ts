export const cookieOptions: ICookieOptions = {
  maxAge: 1 * 24 * 60 * 60 * 1000,
  sameSite: 'none',
  httpOnly: true,
  secure: true,
}

export interface ICookieOptions {
  maxAge: number
  sameSite: 'none' | 'lax' | 'strict'
  httpOnly: boolean
  secure: boolean
}
