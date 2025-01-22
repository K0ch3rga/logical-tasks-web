import { DocumentDTO } from '../Document'

/**
 * Загрузка файла
 * @returns Загруженный {@link DocumentDTO}
 */

export const uploadDocument = async (form: FormData): Promise<userDocumnetDTO> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOiI2YmE0ODU1Zi03MGE5LTQzYTAtYjRiNi04MWM5YzZiOGRlZGEiLCJlbWFpbCI6Iml2YW5vdkBtYWlsLnJ1Iiwic3ViIjoiaXZhbm92QG1haWwucnUiLCJpYXQiOjE3Mzc1MzI2NDIsImV4cCI6MTczNzY3NjY0Mn0.qY5_4L_lTlwD-kh9cSsd60WGCYl_0Z_dtYCEqHBKxdk'
  try {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_CONNECTION + 'document/upload', {
      headers: {
        Authorization: 'Bearer ' + session,
      },
      method: 'POST',
      body: form,
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as userDocumnetDTO)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

type userDocumnetDTO = DocumentDTO
