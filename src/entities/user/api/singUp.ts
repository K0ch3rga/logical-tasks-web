import { BACKEND_CONNECTION } from '@/shared/config'
import { User } from '../User'

/**
 * Регистрация пользователя
 * @returns Токен {@link SignUpResult}
 */

export const singUp = async (signUpRequest: SignUpRequest): Promise<SignUpResult> => {
  try {
    return await fetch(BACKEND_CONNECTION + 'auth/sign-up', {
      method: 'POST',
      body: JSON.stringify(signUpRequest),
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as SignUpResult)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type SignUpResult = {
  token: string
}

export type SignUpRequest = User
