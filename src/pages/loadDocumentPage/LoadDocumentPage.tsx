import { Box, Typography } from '@mui/material'
import { FileLoader } from './fileLoader'
import { Terms } from './Terms'

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
        <FileLoader />
      </Box>
      <Terms />
    </Box>
  )
}
