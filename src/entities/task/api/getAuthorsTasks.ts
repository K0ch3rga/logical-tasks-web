import { User } from '@/entities/user'
import { TaskInfo, TaskType } from '../Task'

/**
 * Получение задач, сгенерированных заданных автором
 * @returns Что попало
 *
 */

export const getAuthorsTasks = async (authorId: string, token: string): Promise<AuthorsTask[]> => {
  try {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_CONNECTION + `task/author/${authorId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
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

export type AuthorsTask = TaskInfo
