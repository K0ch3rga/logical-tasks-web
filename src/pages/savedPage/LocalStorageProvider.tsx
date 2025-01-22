'use client'

import { TaskList } from '@/widgets/list/TaskList'

export const LocalStorageQuestionList = ({ query }: { query: string }) => {
  const tasks = JSON.parse(localStorage.getItem('savedTasks') ?? '[]')

  return <TaskList query={query} tasks={tasks} />
}
