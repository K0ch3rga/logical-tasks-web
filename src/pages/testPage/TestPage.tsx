import { ClientTestPage } from './ClientTestPage'

export const TestPage = () => {
  const data = { name: 'Название' }
  const questions = [
    { title: 'aaaaaaaaaa', type: 'choose', answers: ['not a', 'bbbbbb', 'ccccccc', 'oleg'] },
    { title: 'bbbbbbbb', type: 'type' },
  ]
  return <ClientTestPage questions={questions} meta={data} />
}
