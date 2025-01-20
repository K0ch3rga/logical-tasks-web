'use client'

import { generateTerms } from '@/entities/generator'
import { GenerateTermsResult, updateTerms } from '@/entities/generator/api'
import { Box, Button, TextField } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Terms = () => {
  const query = useSearchParams()
  const router = useRouter()
  const [terms, setTerns] = useState('')
  const [taskId, setTaskID] = useState<string>()

  const handleUpdate = async () => {
    if (!taskId) return
    updateTerms({ taskId: taskId, terms: [terms] })
  }

  const handleNext = () => {
    if (taskId) {
      router.replace(`/test/${taskId}/validate`)
    } else console.log('Нет id')
  }

  useEffect(() => {
    const id = query?.get('documentId')
    if (!id) {
      console.log('Нет id')
      return
    }
    generateTerms({ documentId: id, termsCount: 10 })
      .then((r) => {
        setTerns(r.terms.join('\n'))
        setTaskID(r.taskId)
      })
      .catch((e) => console.log(e))
  }, [])
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
