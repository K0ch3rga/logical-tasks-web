'use client'

import { generateTerms } from '@/entities/generator'
import { useAuthStore } from '@/entities/store/useAuthStore'
import { TaskType } from '@/entities/task'
import { JwtUser } from '@/entities/user/User'
// import { updateTerms } from '@/entities/generator/api'
import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import { decodeJwt } from 'jose'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Terms = ({ documentId }: { documentId?: string }) => {
  const router = useRouter()
  const [terms, setTerns] = useState('')
  const [taskId, setTaskID] = useState<string>()
  const token = useAuthStore().token
  const { id: userId } = decodeJwt<JwtUser>(token!)
  const [taskType, setTaskType] = useState('test')
  const [questionCount, setQuestionCount] = useState('4')

  const handleUpdate = async () => {
    console.log('not implemented')
    if (!taskId) return
    // updateTerms({ taskId: taskId, terms: [terms] })
  }

  const handleNext = () => {
    if (taskId) {
      router.replace(`/test/${taskId}/validate` + `?questionCount=${questionCount}`)
    } else console.log('Нет id')
  }

  useEffect(handleNext, [taskId])

  useEffect(() => {
    if (!token || !userId) {
      console.log('Нет userId')
      return
    }
    if (!documentId) {
      console.log('Нет documentId')
      return
    }
    generateTerms(
      {
        authorId: userId,
        taskType: taskType,
        documentId: documentId!,
        termsCount: Number.parseInt(questionCount),
      },
      token!
    )
      .then((r) => {
        setTerns(r.terms.join('\n'))
        setTaskID(r.taskId)
      })
      .catch((e) => console.log(e))
  }, [documentId])
  return (
    <>
      <TextField
        value={terms}
        multiline
        sx={{
          borderWidth: '1px',
          '& .MuiInputBase-root': { height: 500, backgroundColor: 'grey.50', color: 'black' },
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, color: 'primary.main' }}>
        <Box>
          <Typography>Тип задания</Typography>
          <FormControl
            fullWidth
            sx={{
              '& .MuiInputBase-root': {
                backgroundColor: 'grey.50',
                color: 'black',
                borderRadius: 0,
              },
            }}
          >
            <Select value={taskType} onChange={(e) => setTaskType(e.target.value)} size='small'>
              <MenuItem sx={{ color: 'primary.main' }} value={TaskType.CROSSWORD}>
                Кроссворд
              </MenuItem>
              <MenuItem sx={{ color: 'primary.main' }} value={TaskType.TEST}>
                Тест
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography>Количество вопросов/слов в задании</Typography>
          <TextField
            variant='outlined'
            sx={{
              '& .MuiInputBase-root': {
                backgroundColor: 'grey.50',
                color: 'black',
                borderRadius: 0,
              },
              '& .MuiOutlinedInput-input': { p: 1, width: 300 },
              '& .MuiOutlinedInput-notchedOutline': { borderWidth: 0 },
            }}
            value={questionCount}
            onChange={(e) => setQuestionCount(e.target.value)}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignSelf: 'end' }}>
        <Button
          variant='contained'
          color='secondary'
          sx={{ width: 160, color: 'white' }}
          onClick={handleUpdate}
        >
          Обновить
        </Button>
        <Button
          variant='contained'
          color='secondary'
          sx={{ width: 160, color: 'white' }}
          onClick={handleNext}
        >
          Далее
        </Button>
      </Box>
    </>
  )
}
