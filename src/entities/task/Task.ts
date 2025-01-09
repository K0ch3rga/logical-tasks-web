export type TaskInfo = {
  id: number
  name: string
  description: string
  author: UserInfo
  taskType: TaskType
  maxScore: number
  documentInfo: DocumentInfo
  createdAt: Date
}

type UserInfo = string
type DocumentInfo = string

export enum TaskType {
  crossword = 'crossword',
  test = 'test',
}
