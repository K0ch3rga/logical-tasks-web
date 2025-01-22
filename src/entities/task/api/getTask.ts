import { BACKEND_CONNECTION } from '@/shared/config'
import { User } from '@/entities/user'
import { DocumentInfo, TaskType } from '../Task'

/**
 * Получение задания
 * @returns Массив {@link TaskData} с ссылками на иконки
 *
 */

export const getTask = async (taskId: string): Promise<GetTaskResult> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOiI3ZDllNmVmOS01ZDdmLTQyZDAtYTNkZi0yNDFmNjE2MGMzZjMiLCJlbWFpbCI6Iml2YW5vdkBtYWlsLnJ1Iiwic3ViIjoiaXZhbm92QG1haWwucnUiLCJpYXQiOjE3Mzc1MjY3OTMsImV4cCI6MTczNzY3MDc5M30.4wusuWZI0mfwJJfqQjzRxEoO9TV2DmDnOuO9Otmb7j4'
  try {
    return await fetch(BACKEND_CONNECTION + `task/${taskId}`, {
      headers: {
        Authorization: 'Bearer ' + session,
      },
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as GetTaskResult)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

type GetTaskResult = {
  taskInfo: TaskData
  content: string
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
