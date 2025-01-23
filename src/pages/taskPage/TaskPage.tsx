import { ClientTestPage } from './ClientTestPage'
import { getTask, TaskType } from '@/entities/task'
import { CrosswordPage } from './CrosswordPage'
import { useAuthStore } from '@/entities/store/useAuthStore'
import { useEffect, useState } from 'react'
import { GetTaskResult } from '@/entities/task/api/getTask'

export const TaskPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTask((await params).id)
  if (data!.taskInfo.taskType == TaskType.test)
    return <ClientTestPage questions={JSON.parse(data!.content)} meta={data!.taskInfo.name} />
  else return <CrosswordPage data={JSON.parse(data!.content)} />
}
