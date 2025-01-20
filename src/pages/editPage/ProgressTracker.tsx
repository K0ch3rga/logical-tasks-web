import { Box, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

export const ProgressTracker = ({
  progress,
  totalQuestions,
  time,
}: {
  progress: number
  totalQuestions: number
  time: number
}) => {
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(`Time elapsed: ${(Date.now() - time) / 1000} seconds`)
      setDuration((Date.now() - time) / 1000)
    }, 1000)
    return () => clearInterval(timer)
  }, [time])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
      <Box>
        <Typography>Прогресс</Typography>
        <TextField
          variant='outlined'
          disabled
          value={(progress / totalQuestions) * 100}
          sx={{
            '& .MuiInputBase-root': { backgroundColor: 'grey.50', color: 'black', borderRadius: 0 },
            '& .MuiOutlinedInput-input': { p: 1, width: 80 },
            '& .MuiOutlinedInput-notchedOutline': { borderWidth: 0 },
          }}
        ></TextField>
      </Box>
      <Box>
        <Typography>Время</Typography>
        <TextField
          variant='outlined'
          disabled
          value={duration}
          sx={{
            '& .MuiInputBase-root': { backgroundColor: 'grey.50', color: 'black', borderRadius: 0 },
            '& .MuiOutlinedInput-input': { p: 1, width: 80 },
            '& .MuiOutlinedInput-notchedOutline': { borderWidth: 0 },
          }}
        ></TextField>
      </Box>
    </Box>
  )
}
