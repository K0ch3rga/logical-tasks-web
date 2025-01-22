/**
 * Генерация терминов
 * @returns Список терминов с id задания {@link GenerateTermsResult}
 */

export const generateTerms = async (
  generateRequest: GenerateTermsRequest
): Promise<GenerateTermsResult> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOiI2YmE0ODU1Zi03MGE5LTQzYTAtYjRiNi04MWM5YzZiOGRlZGEiLCJlbWFpbCI6Iml2YW5vdkBtYWlsLnJ1Iiwic3ViIjoiaXZhbm92QG1haWwucnUiLCJpYXQiOjE3Mzc1MzI2NDIsImV4cCI6MTczNzY3NjY0Mn0.qY5_4L_lTlwD-kh9cSsd60WGCYl_0Z_dtYCEqHBKxdk'
  try {
    return await fetch(
      process.env.NEXT_PUBLIC_BACKEND_CONNECTION + 'task/generator/terms/generate',
      {
        headers: {
          Authorization: 'Bearer ' + session,
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
