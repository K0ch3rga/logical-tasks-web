import { BACKEND_CONNECTION } from '@/shared/config'
import { DocumentDTO } from '../Document'

/**
 * Получение документов, принадлежащих пользователю
 * @returns Массив {@link userDocumentDTO}
 */

export const listUserDocuments = async (documentId: number): Promise<userDocumentDTO[]> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOjEsImVtYWlsIjoiaXZhbm92QG1haWwucnUiLCJzdWIiOiJpdmFub3ZAbWFpbC5ydSIsImlhdCI6MTczNzIwNzY1NSwiZXhwIjoxNzM3MzUxNjU1fQ.BTlLRi80pMvCaTnPu4soQTPtyHoDyev5n0vphJevqPE'
  try {
    return await fetch(BACKEND_CONNECTION + `/document/owner/${documentId}`, {
      headers: {
        Authorization: 'Bearer ' + session,
      },
    })
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
