'use client'

import { useAuthStore } from '@/entities/store/useAuthStore'
import { getAuthorsTasks, type AuthorsTask } from '@/entities/task'
import { JwtUser } from '@/entities/user/User'
import { TaskList } from '@/widgets/list/TaskList'
import { decodeJwt } from 'jose'

import { useEffect, useState } from 'react'

export const CreatedTasksProvider = ({ query }: { query: string }) => {
  const token = useAuthStore().token
  const { id } = decodeJwt<JwtUser>(token!)
  const [tasks, setTasks] = useState<AuthorsTask[]>([])
  useEffect(() => {
    if (id && token) getAuthorsTasks(id, token).then((t) => setTasks(t))
  }, [])

  return <TaskList query={query} tasks={tasks} />
}
