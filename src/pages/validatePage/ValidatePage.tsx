import { Box, Typography } from '@mui/material'
import { TaskSettings } from './TaskSettings'
import { TermsEdit } from './TermsEdit'

export const ValidatePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const taskId = (await params).id
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography color='primary.main' variant='h2'>
        Настройка задания
      </Typography>
      <TermsEdit taskId={taskId} />

      <TaskSettings taskId={taskId} />
    </Box>
  )
}
