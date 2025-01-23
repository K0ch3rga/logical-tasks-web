'use client'

import { Box, Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

export const TaskSettings = ({ taskId }: { taskId: string }) => {
  const router = useRouter()
  const handleNext = () => {
    router.push(`/test/${taskId}/edit`)
  }
  return (
    <>
      {/* <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, color: 'primary.main' }}>
        <Box>
          <Typography>Тип задания</Typography>
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
          ></TextField>
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
          ></TextField>
        </Box>
      </Box> */}
      <Button
        variant='contained'
        color='secondary'
        sx={{ width: 160, color: 'white' }}
        onClick={handleNext}
      >
        Сгенирировать
      </Button>
    </>
  )
}
