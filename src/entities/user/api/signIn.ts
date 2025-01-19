import { BACKEND_CONNECTION } from '@/shared/config'
import { User } from '../User'

/**
 * Авторизация пользователя
 * @returns Токен {@link SignInResult}
 */

export const singIn = async (signInRequest: SignInRequest): Promise<SignInResult> => {
  try {
    return await fetch(BACKEND_CONNECTION + 'auth/sign-in', {
      method: 'POST',
      body: JSON.stringify(signInRequest),
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as SignInResult)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type SignInResult = {
  token: string
}

export type SignInRequest = Pick<User, 'email' | 'password'>
