import { User } from '@/entities/user'

export type TaskInfo = {
  id: string
  name: string
  description: string
  author: UserInfo
  taskType: TaskType
  maxScore: number
  documentInfo: DocumentInfo
  createdAt: Date
}

type UserInfo = User

export type DocumentInfo = {
  id: string
  userId: string
  name: string
  description: string
}

export enum TaskType {
  CROSSWORD = 'CROSSWORD',
  TEST = 'TEST',
}

export type SavedTask = TaskInfo & { score: number }
