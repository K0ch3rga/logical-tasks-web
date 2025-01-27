/**
 * Генерация терминов
 * @returns Список терминов с id задания {@link GenerateTermsResult}
 */

export const generateTerms = async (
  generateRequest: GenerateTermsRequest,
  token: string
): Promise<GenerateTermsResult> => {
  try {
    return await fetch(
      process.env.NEXT_PUBLIC_BACKEND_CONNECTION + 'task/generator/terms/generate',
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(generateRequest),
      }
    )
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
  authorId: string
  documentId: string
  termsCount: number
  taskType: string
}
