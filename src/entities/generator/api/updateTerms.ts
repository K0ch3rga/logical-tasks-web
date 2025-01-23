import { BACKEND_CONNECTION } from '@/shared/config'
import { Question } from '../Question'

/**
 * Обновление терминов
 * @returns Новый список терминов с id задания {@link UpdateTermsResult}
 */

export const updateTerms = async (
  generateRequest: UpdateTermsRequest,
  token: string
): Promise<UpdateTermsResult> => {
  try {
    return await fetch(BACKEND_CONNECTION + 'task/generator/terms/update', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      method: 'PUT',
      body: JSON.stringify(generateRequest),
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as UpdateTermsResult)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type UpdateTermsRequest = {
  taskId: string
  terms: string[]
}

export type UpdateTermsResult = UpdateTermsRequest
