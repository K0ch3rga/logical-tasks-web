import { ClientTestPage } from './ClientTestPage'
import { getTask, TaskType } from '@/entities/task'
import { CrosswordPage } from './CrosswordPage'
import { Typography } from '@mui/material'

export const TaskPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTask((await params).id)
  if (data!.taskInfo.taskType == TaskType.TEST)
    return <ClientTestPage questions={JSON.parse(data!.content).questions} meta={data!.taskInfo} />
  else if (data!.taskInfo.taskType == TaskType.CROSSWORD)
    return <CrosswordPage data={JSON.parse(data!.content)} meta={data!.taskInfo} />
  else return <Typography>Неизвестный тип {data.taskInfo.taskType}</Typography>
}
