'use client'

import { TaskList } from '@/widgets/list/TaskList'
import { useEffect, useState } from 'react'

export const LocalStorageQuestionList = ({ query }: { query: string }) => {
  const [tasks, setTasks] = useState([])
  useEffect(() => setTasks(JSON.parse(localStorage.getItem('savedTasks') ?? '[]')), [])

  return <TaskList query={query} tasks={tasks} />
}
