'use client'

import { SavedTask, TaskInfo } from '@/entities/task/Task'
import { TaskList } from '@/widgets/list/TaskList'
import { useEffect, useState } from 'react'

export const LocalStorageQuestionList = ({ query }: { query: string }) => {
  const [tasks, setTasks] = useState<SavedTask[]>([])
  console.log(tasks)
  useEffect(() => setTasks(JSON.parse(localStorage.getItem('savedTasks') ?? '[]')), [])

  return <TaskList query={query} tasks={tasks as TaskInfo[]} scores={tasks.map((t) => t.score)} />
}
