'use client'

import { Box, Button, Typography } from '@mui/material'
import { ClientCrossword } from './ClientCrossword'
import { CluesInputOriginal } from '@jaredreisinger/react-crossword/dist/types'
import { Answer, AnswerContainer } from './model'
import { solveTask } from '@/entities/task/api/solveTask'
import { TaskInfo } from '@/entities/task'
import { useEffect, useState } from 'react'
import { decodeJwt } from 'jose'
import { JwtUser } from '@/entities/user/User'
import { useAuthStore } from '@/entities/store/useAuthStore'
import { useRouter } from 'next/navigation'
import { SavedTask } from '@/entities/task/Task'

export const CrosswordPage = ({ data, meta }: { data: CluesInputOriginal; meta: TaskInfo }) => {
  const answers: AnswerContainer = { across: new Array<Answer>(), down: new Array<Answer>() }
  const token = useAuthStore().token
  const router = useRouter()
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  const handleAddAnswer = (a: Answer) => {
    answers[a.direction][a.clueNumber] = a
  }

  const handleComplete = async () => {
    const rightAnswers =
      answers.across.reduce((acc, current) => {
        if (data[current.direction][current.clueNumber].answer == current.answer) {
          return acc + 1
        }
        return acc
      }, 0) +
      answers.down.reduce((acc, current) => {
        if (data[current.direction][current.clueNumber].answer == current.answer) {
          return acc + 1
        }
        return acc
      }, 0)

    if (lastName && firstName) {
      const result = await solveTask({
        firstName: firstName,
        lastName: lastName,
        score: rightAnswers,
        taskId: meta.id,
      })
      saveInLocalStorage({ ...meta, score: rightAnswers })
      router.push('/saved')
    }
  }

  const saveInLocalStorage = (data: SavedTask) => {
    const savedData = localStorage.getItem('savedTasks') ?? '[]'
    const savedTests: SavedTask[] = JSON.parse(savedData)
    savedTests.concat(data)
    localStorage.setItem('savedTasks', JSON.stringify(savedTests.concat(data)))
  }

  useEffect(() => {
    if (token) {
      const { firstName: fn, lastName: ln } = decodeJwt<JwtUser>(token)
      setFirstName(fn)
      setLastName(ln)
    }
  }, [token])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h2' color='primary'>
        Название
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <ClientCrossword data={data} onWordComplete={handleAddAnswer} />
      </Box>
      <Button
        variant='contained'
        color='secondary'
        sx={{ width: 300, color: 'white', alignSelf: 'start' }}
        onClick={handleComplete}
      >
        Проверить
      </Button>
    </Box>
  )
}
