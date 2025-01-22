'use client'

import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { ProgressTracker } from './ProgressTracker'
import { QuestionList } from './QuestionList'
import { solveTask } from '@/entities/task/api/solveTask'

export const ClientTestPage = ({ questions, meta }: { questions: any[]; meta: any }) => {
  const [progress, setProgress] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())
  const [answers, setAnswers] = useState(new Array<string>(questions.length))
  const setAnswer = (i: number) => (a: string) => {
    console.log(a)
    answers[i] = a
    console.log(answers)
    setProgress(answers.filter((a) => !!a).length)
  }

  const handleSubmit = async () => {
    const rightAnswers = questions.reduce((count, q, i) => {
      q.rightAnswer == answers[i] && count++
    }, 0)
    const result = await solveTask({
      firstName: 'oleg',
      lastName: 'oleg',
      score: rightAnswers,
      taskId: '',
    })
    saveInLocalStorage({ taskId: '', score: rightAnswers, questionCount: questions.length })
  }

  const saveInLocalStorage = (data: any) => {
    const savedData = localStorage.getItem('savedTasks') ?? '[]'
    const savedTests: any[] = JSON.parse(savedData)
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
      <QuestionList questions={questions} setAnswer={setAnswer} />
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
