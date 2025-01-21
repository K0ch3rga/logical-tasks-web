import { BACKEND_CONNECTION } from '@/shared/config'

/**
 * Генерация терминов
 * @returns Список терминов с id задания {@link GenerateTermsResult}
 */

export const generateTerms = async (
  generateRequest: GenerateTermsRequest
): Promise<GenerateTermsResult> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOjEsImVtYWlsIjoiaXZhbm92QG1haWwucnUiLCJzdWIiOiJpdmFub3ZAbWFpbC5ydSIsImlhdCI6MTczNzIwNzY1NSwiZXhwIjoxNzM3MzUxNjU1fQ.BTlLRi80pMvCaTnPu4soQTPtyHoDyev5n0vphJevqPE'
  try {
    return await fetch(BACKEND_CONNECTION + 'task/generator/terms/generate', {
      headers: {
        Authorization: 'Bearer ' + session,
      },
      method: 'POST',
      body: JSON.stringify(generateRequest),
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as GenerateTermsResult)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type GenerateTermsResult = {
  taskId: string
  terms: string[]
}

export type GenerateTermsRequest = {
  documentId: string
  termsCount: number
}
