'use client'

import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { ProgressTracker } from './ProgressTracker'
import { QuestionList } from './QuestionList'
import { solveTask } from '@/entities/task/api/solveTask'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/entities/store/useAuthStore'
import { TaskInfo } from '@/entities/task'
import { decodeJwt } from 'jose'
import { JwtUser } from '@/entities/user/User'
import { SavedTask } from '@/entities/task/Task'

export const ClientTestPage = ({ questions, meta }: { questions: any[]; meta: TaskInfo }) => {
  const [progress, setProgress] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())
  const [answers, setAnswers] = useState(new Array<string>(questions.length))
  const router = useRouter()
  const token = useAuthStore().token
  const { firstName, lastName } = decodeJwt<JwtUser>(token!)
  const setAnswer = (i: number) => (a: string) => {
    answers[i] = a
    setProgress(answers.filter((a) => !!a).length)
  }

  const handleSubmit = async () => {
    const rightAnswers = questions.reduce((count, q, i) => {
      return q.correctAnswer == q.answers.findIndex((a: string) => a === answers[i])
        ? count + 1
        : count
    }, 0)
    console.log(rightAnswers)
    const result = await solveTask({
      firstName: firstName,
      lastName: lastName,
      score: rightAnswers,
      taskId: meta.id,
    })
    saveInLocalStorage({ ...meta, score: rightAnswers })
    router.push('/saved')
  }

  const saveInLocalStorage = (data: SavedTask) => {
    const savedData = localStorage.getItem('savedTasks') ?? '[]'
    const savedTests: SavedTask[] = JSON.parse(savedData)
    savedTests.concat(data)
    localStorage.setItem('savedTasks', JSON.stringify(savedTests.concat(data)))
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', color: 'black' }}>
        <Typography variant='h2' color='primary'>
          {meta.name}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <ProgressTracker progress={progress} totalQuestions={questions.length} time={startTime} />
      </Box>
      <Box>
        <QuestionList questions={questions} setAnswer={setAnswer} answers={answers} />
      </Box>
      <Box>
        <Button
          variant='contained'
          color='secondary'
          sx={{ color: 'white' }}
          component='span'
          onClick={handleSubmit}
        >
          Сохранить
        </Button>
      </Box>
    </Box>
  )
}
