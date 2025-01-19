import { BACKEND_CONNECTION } from '@/shared/config'
import { User } from '@/entities/user'
import { DocumentInfo, TaskType } from '../Task'

/**
 * Получение задания
 * @returns Массив {@link TaskData} с ссылками на иконки
 *
 */

export const getTask = async (taskId: string): Promise<TaskData[]> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOjEsImVtYWlsIjoiaXZhbm92QG1haWwucnUiLCJzdWIiOiJpdmFub3ZAbWFpbC5ydSIsImlhdCI6MTczNzIwNzY1NSwiZXhwIjoxNzM3MzUxNjU1fQ.BTlLRi80pMvCaTnPu4soQTPtyHoDyev5n0vphJevqPE'
  try {
    return await fetch(BACKEND_CONNECTION + `task/${taskId}`, {
      headers: {
        Authorization: 'Bearer ' + session,
      },
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as TaskData[])
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type TaskData = {
  id: string
  name: string
  description: string
  author: Author
  taskType: TaskType
  maxScore: number
  documentInfo: DocumentInfo
  createdAt: Date
}

type Author = User
