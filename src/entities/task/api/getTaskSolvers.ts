import { BACKEND_CONNECTION } from '@/shared/config'

/**
 * Получение всех студентов, решающих заданное задание
 * @returns Массив {@link TaskSolver}
 *
 */

export const getTaskSolvers = async (taskId: number): Promise<TaskSolver[]> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOjEsImVtYWlsIjoiaXZhbm92QG1haWwucnUiLCJzdWIiOiJpdmFub3ZAbWFpbC5ydSIsImlhdCI6MTczNzIwNzY1NSwiZXhwIjoxNzM3MzUxNjU1fQ.BTlLRi80pMvCaTnPu4soQTPtyHoDyev5n0vphJevqPE'
  try {
    return await fetch(BACKEND_CONNECTION + `task/taskSolvers/${taskId}`, {
      headers: {
        Authorization: 'Bearer ' + session,
      },
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as TaskSolver[])
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type TaskSolver = {
  id: number
  solver: User
  taskInfo: TaskInfo
  score: number
  solved: boolean
}

export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
}

export type TaskInfo = {
  id: number
  name: string
  description: string
  author: User
  taskType: string
  maxScore: number
  documentInfo: DocumentInfo
  createdAt: Date
}

export type DocumentInfo = {
  id: number
  userId: number
  name: string
  description: string
}
