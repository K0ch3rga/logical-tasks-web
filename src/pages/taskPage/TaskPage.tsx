import { ClientTestPage } from './ClientTestPage'
import { getTask, TaskType } from '@/entities/task'
import { CrosswordPage } from './CrosswordPage'

export const TaskPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTask((await params).id)
  if (data!.taskInfo.taskType == TaskType.test)
    return <ClientTestPage questions={JSON.parse(data!.content)} meta={data!.taskInfo} />
  else return <CrosswordPage data={JSON.parse(data!.content)} meta={data!.taskInfo} />
}
