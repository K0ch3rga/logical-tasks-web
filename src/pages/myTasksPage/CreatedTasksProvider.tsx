'use client'

import { getAuthorsTasks } from '@/entities/task'
import { TaskList } from '@/widgets/list/TaskList'

export const CreatedTasksProvider = async ({ query }: { query: string }) => {
  const id = ''
  const tasks = await getAuthorsTasks(id)

  return <TaskList query={query} tasks={tasks} />
}
