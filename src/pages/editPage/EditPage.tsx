import { Question } from '@/entities/generator'
import { ClientTestEdit } from './ClientTestEdit'
import { getTask } from '@/entities/task'

export const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const data2 = await getTask((await params).id).catch((e) => console.log(e))
  const data = { content: '[ "oleg"]', taskInfo: { name: 'oleg' } }
  const questions: Question[] = [
    {
      questionId: 1,
      question: 'Задание 1',
      title: 'Задание 1',
      answer: 'aaaaaaaaa',
      type: 'choose',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
    },
    {
      questionId: 1,
      question: 'Задание 2',
      title: 'Задание 2',
      answer: 'aaaaaaaaa',
      type: 'type',
      answers: ['help', 'me', 'going', 'insane'],
    },
  ]
  // if (data.taskInfo.taskType == TaskType.test)
  return <ClientTestEdit questions={questions} meta={data.taskInfo.name} />
  // else return <CrosswordPage data={JSON.parse(data.content)} />
}
