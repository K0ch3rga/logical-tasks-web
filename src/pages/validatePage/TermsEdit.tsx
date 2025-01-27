'use client'

import { generateQuestion, updateQuestions } from '@/entities/generator'
import { useAuthStore } from '@/entities/store/useAuthStore'
import { Box, Typography, Button, TextField } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const TermsEdit = ({ taskId }: { taskId: string }) => {
  const [questions, setQuestions] = useState<string>()
  const token = useAuthStore().token
  const query = useSearchParams()
  const questionCount = query?.get('questionCount')

  const handleUpdate = () => {
    // questions as Question[]
    if (token) updateQuestions({ taskId: taskId, questionsAndAnswers: [] }, token)
  }

  useEffect(() => {
    if (token && questionCount)
      generateQuestion(
        { questionsCount: Number.parseInt(questionCount), taskId: taskId },
        token
      ).then((r) => {
        setQuestions(r.questions.map((q) => q.question + ' ' + q.answers.join(' ')).join('\n'))
      })
    else console.log('no token')
  }, [token])
  return (
    <>
      <Box color='primary.main' sx={{ display: 'flex' }}>
        <Typography>
          Проверьте ключевые термины, выберите тип задачи и настройте параметры.
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant='contained'
          color='secondary'
          sx={{ width: 160, color: 'white', alignSelf: 'end' }}
          onClick={handleUpdate}
        >
          Редактировать
        </Button>
      </Box>
      <TextField
        value={questions}
        multiline
        sx={{
          borderWidth: '1px',
          '& .MuiInputBase-root': { height: 500, backgroundColor: 'grey.50', color: 'black' },
        }}
      />
    </>
  )
}
