'use client'

import { Box, Button, TextField, Typography } from '@mui/material'

export const TaskSettings = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, color: 'primary.main' }}>
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
      </Box>
      <Button variant='contained' color='secondary' sx={{ width: 160, color: 'white' }}>
        Сгенирировать
      </Button>
    </>
  )
}
