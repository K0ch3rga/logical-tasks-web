import { SearchBar } from '@/widgets/search/ui'
import { Box, Button } from '@mui/material'
import { LocalStorageQuestionList } from './LocalStorageProvider'

export const SavedTasksPage = async (props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) => {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
      <LocalStorageQuestionList query={query} />
    </Box>
  )
}
