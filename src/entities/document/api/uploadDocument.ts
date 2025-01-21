import { DocumentDTO } from '../Document'

/**
 * Загрузка файла
 * @returns Загруженный {@link DocumentDTO}
 */

export const uploadDocument = async (form: FormData): Promise<userDocumnetDTO> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOiI3YjI1Mjc2ZC1iOTY3LTQ0OWYtYTI0MC0wOWMxMjVmMGY5MDIiLCJlbWFpbCI6Iml2YW5vdkBtYWlsLnJ1Iiwic3ViIjoiaXZhbm92QG1haWwucnUiLCJpYXQiOjE3MzczNTQ0NDUsImV4cCI6MTczNzQ5ODQ0NX0.oQLQSDVjUSPhsTl0NZ4bEx-dAOQ0XWHtloJuXRCEsag'
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
