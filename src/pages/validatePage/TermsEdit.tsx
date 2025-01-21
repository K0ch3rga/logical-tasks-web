'use client'
import { generateQuestion, updateQuestions } from '@/entities/generator'
import { Box, Typography, Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

export const TermsEdit = async ({ taskId }: { taskId: string }) => {
  const [questions, setQuestions] = useState<string>()

  const handleUpdate = () => {
    // questions as Question[]
    updateQuestions({ taskId: taskId, questionsAndAnswers: [] })
  }

  useEffect(() => {
    generateQuestion({ questionsCount: 10, taskId: taskId }).then((r) => {
      setQuestions(r.questionsAndAnswers.join('\n'))
    })
  }, [])
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
