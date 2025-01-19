import { BACKEND_CONNECTION } from '@/shared/config'
import { Question } from '../Question'

/**
 * Обновление терминов
 * @returns Новый список терминов с id задания {@link UpdateTermsResult}
 */

export const updateTerms = async (
  generateRequest: UpdateTermsRequest
): Promise<UpdateTermsResult> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOjEsImVtYWlsIjoiaXZhbm92QG1haWwucnUiLCJzdWIiOiJpdmFub3ZAbWFpbC5ydSIsImlhdCI6MTczNzIwNzY1NSwiZXhwIjoxNzM3MzUxNjU1fQ.BTlLRi80pMvCaTnPu4soQTPtyHoDyev5n0vphJevqPE'
  try {
    return await fetch(BACKEND_CONNECTION + 'task/generator/terms/update', {
      headers: {
        Authorization: 'Bearer ' + session,
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
  taskId: number
  terms: string[]
}

export type UpdateTermsResult = UpdateTermsRequest
