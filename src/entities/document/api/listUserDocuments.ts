import { DocumentDTO } from '../Document'

/**
 * Получение документов, принадлежащих пользователю
 * @returns Массив {@link userDocumentDTO}
 */

export const listUserDocuments = async (
  documentId: number,
  token: string
): Promise<userDocumentDTO[]> => {
  try {
    return await fetch(
      process.env.NEXT_PUBLIC_BACKEND_CONNECTION + `document/owner/${documentId}`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as userDocumentDTO[])
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

type userDocumentDTO = DocumentDTO
