'use client'

import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { QuestionList } from './QuestionList'
import { LabeledInput } from './LabeledInput'
import { usePathname } from 'next/navigation'

export const ClientTestEdit = ({ questions, meta }: { questions: any[]; meta: any }) => {
  const [progress, setProgress] = useState(questions.length)
  const [startTime, setStartTime] = useState(Date.now())
  const [taskTitle, setTaskTitle] = useState(meta.name)
  const pathname = usePathname()
  const taskPath = pathname?.split('/').slice(0, -1).join('/')

  return (
    <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
      <Typography variant='h2' color='primary.main'>
        Редактирование задания
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', color: 'black', gap: 1, py: 1 }}>
        <LabeledInput
          title='Название задания'
          value={taskTitle}
          width={300}
          setState={(v: string) => setTaskTitle(v)}
        />
        <LabeledInput title='Прогресс' value={progress.toString()} disabled />
        <LabeledInput title='Время' value={new Date(startTime).toISOString()} disabled />
      </Box>
      <QuestionList questions={questions} />
      <Box sx={{ justifyContent: 'end', display: 'flex', gap: 1 }}>
        <Button
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: 'secondary.main',
            borderWidth: 1,
            borderColor: 'secondary.main',
            borderStyle: 'solid',
          }}
          component='a'
          href={taskPath}
        >
          Закрыть
        </Button>
        <Button variant='contained' color='secondary' sx={{ color: 'white' }} component='span'>
          Сохранить
        </Button>
      </Box>
    </Box>
  )
}
