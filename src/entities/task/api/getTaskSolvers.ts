/**
 * Получение всех студентов, решающих заданное задание
 * @returns Массив {@link TaskSolver}
 *
 */

export const getTaskSolvers = async (taskId: number, token: string): Promise<TaskSolver[]> => {
  try {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_CONNECTION + `task/taskSolvers/${taskId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
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
