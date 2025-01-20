import { Box, Button, Typography } from '@mui/material'
import { ClientCrossword } from './ClientCrossword'

export const CrosswordPage = ({ data }: { data: any }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h2' color='primary'>
        Название
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <ClientCrossword data={data} />
      </Box>
      <Button
        variant='contained'
        color='secondary'
        sx={{ width: 300, color: 'white', alignSelf: 'start' }}
      >
        Проверить
      </Button>
    </Box>
  )
}
