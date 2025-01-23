import { User } from '@/entities/user'
import { DocumentInfo, TaskType } from '../Task'
import { Question } from '@/entities/generator'

/**
 * Получение задания
 * @returns Массив {@link TaskData} с ссылками на иконки
 *
 */

export const getTask = async (taskId: string): Promise<GetTaskResult> => {
  try {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_CONNECTION + `task/get/${taskId}`)
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as GetTaskResult)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type GetTaskResult = {
  taskInfo: TaskData
  question: Question[]
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
