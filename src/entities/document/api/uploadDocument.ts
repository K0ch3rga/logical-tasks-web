import { DocumentDTO } from '../Document'

/**
 * Загрузка файла
 * @returns Загруженный {@link DocumentDTO}
 */

export const uploadDocument = async (form: FormData, token: string): Promise<userDocumnetDTO> => {
  try {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_CONNECTION + 'document/upload', {
      headers: {
        Authorization: 'Bearer ' + token,
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
