import { BACKEND_CONNECTION } from '@/shared/config'
import { TaskType } from '../Task'

/**
 * Фиксация решения задачи
 * @returns Массив {@link SolveTaskRespond} с ссылками на иконки
 *
 */

export const solveTask = async (
  body: SolveTaskRequest,
  token: string
): Promise<SolveTaskRespond> => {
  try {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_CONNECTION + 'task/taskSolvers/create', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as SolveTaskRespond)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

type SolveTaskRequest = {
  firstName: string
  lastName: string
  taskId: string
  score: number
}

type SolveTaskRespond = {
  id: string
  firstName: string
  lastName: string
  taskId: string
  score: number
  maxScore: number
}
