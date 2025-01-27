'use client'
import { getTask, TaskType } from '@/entities/task'
import { GetTaskResult } from '@/entities/task/api/getTask'
import { useState, useEffect } from 'react'
import { ClientTestEdit } from './ClientTestEdit'
import { CreateName } from './CreateName'

export const DataProvider = ({ id }: { id: string }) => {
  const [data, setData] = useState<GetTaskResult | null>(null)

  useEffect(() => {
    getTask(id)
      .then((r) => {
        console.log(r)
        setData(r)
      })
      .catch((e) => console.log(e))
  }, [])

  if (data) {
    // if (data.taskInfo.taskType == TaskType.test)
    //   return <ClientTestEdit questions={data.question} meta={data.taskInfo.name} />
    return <CreateName id={id} /> //<CrosswordPage data={data.question} />
  } else {
    return <>Загрузка</>
  }
}
