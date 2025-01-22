import { BACKEND_CONNECTION } from '@/shared/config'
import { TaskType } from '../Task'

/**
 * Получение задач, сгенерированных заданных автором
 * @returns Массив {@link TaskType} с ссылками на иконки
 *
 */

export const getAuthorsTasks = async (authorId: string): Promise<AuthorsTask[]> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOjEsImVtYWlsIjoiaXZhbm92QG1haWwucnUiLCJzdWIiOiJpdmFub3ZAbWFpbC5ydSIsImlhdCI6MTczNzIwNzY1NSwiZXhwIjoxNzM3MzUxNjU1fQ.BTlLRi80pMvCaTnPu4soQTPtyHoDyev5n0vphJevqPE'
  try {
    return await fetch(BACKEND_CONNECTION + `task/author/${authorId}`, {
      headers: {
        Authorization: 'Bearer ' + session,
      },
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as AuthorsTask[])
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type AuthorsTask = {
  id: number
  name: string
  description: string
  author: Author
  taskType: string
  maxScore: number
  documentInfo: DocumentInfo
  createdAt: Date
}

// Possibly is user
export type Author = {
  id: number
  firstName: string
  lastName: string
  email: string
}

export type DocumentInfo = {
  id: number
  userId: number
  name: string
  description: string
}
