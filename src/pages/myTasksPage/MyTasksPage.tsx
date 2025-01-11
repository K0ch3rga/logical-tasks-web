import { TaskList } from '@/widgets/list/TaskList'
import { SearchBar } from '@/widgets/search/ui'
import { Box, Button } from '@mui/material'

export const MyTasksPage = async (props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) => {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
        <Button
          href='/create'
          variant='contained'
          sx={{ borderRadius: 1, alignSelf: 'end' }}
          color='secondary'
        >
          Создать задание
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          bgcolor: 'grey.50',
          p: 1,
          borderRadius: 1,
        }}
      >
        <Button sx={{ bgcolor: 'primary.main', color: 'text.primary' }}> По алфавиту </Button>
        <Button sx={{ bgcolor: 'primary.main', color: 'text.primary' }}> По дате </Button>
        <Button sx={{ bgcolor: 'primary.main', color: 'text.primary' }}> По прогрессу </Button>
        <Box sx={{ flexGrow: 1 }} />
        <SearchBar />
      </Box>
      <TaskList query={query} />
    </Box>
  )
}
