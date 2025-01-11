import { Box, Button, TextField, Typography } from '@mui/material'

export const LoadDoocumentPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography color='black' variant='h2'>
        Загрузка материала
      </Typography>
      <Box color='black' sx={{ display: 'flex' }}>
        <Typography>
          Загрузите текст, из которого будут созданы задачи. Это может быть документ, статья или
          инструкции.
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant='contained' color='secondary' sx={{ color: 'white' }}>
          Загрузка файлов
        </Button>
      </Box>
      <TextField
        multiline
        sx={{
          borderWidth: '1px',
          '& .MuiInputBase-root': { height: 500, backgroundColor: 'grey.50', color: 'black' },
        }}
      />
      <Button
        variant='contained'
        color='secondary'
        sx={{ width: 160, color: 'white', alignSelf: 'end' }}
      >
        Распознать
      </Button>
    </Box>
  )
}
