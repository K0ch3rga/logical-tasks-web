'use client'

import { generateTask } from '@/entities/generator'
import { useAuthStore } from '@/entities/store/useAuthStore'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { LabeledInput } from './LabeledInput'
import { useState } from 'react'

export const CreateName = ({ id }: { id: string }) => {
  const [title, setTtle] = useState<string>('')
  const token = useAuthStore().token
  const router = useRouter()

  const handleGenerate = () => {
    if (!token || !title) return
    generateTask({ taskId: id, taskName: title }, token).then(() => router.push('/mytasks'))
  }

  return (
    <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
      <Typography variant='h2' color='primary.main'>
        Редактирование задания
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', color: 'black', gap: 1, py: 1 }}>
        <LabeledInput
          title='Название задания'
          value={title}
          width={300}
          setState={(v: string) => setTtle(v)}
        />
      </Box>
      <Box>
        <Button
          variant='contained'
          color='secondary'
          sx={{ color: 'white' }}
          component='span'
          onClick={handleGenerate}
        >
          Сохранить
        </Button>
      </Box>
    </Box>
  )
}
