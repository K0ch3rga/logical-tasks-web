import Crossword from '@jaredreisinger/react-crossword'
import { Box } from '@mui/material'
import { ClientCrossword } from './ClientCrossword'

export const CrosswordPage = () => {
  const data = {
    across: {
      1: {
        clue: 'one plus one',
        answer: 'TWO',
        row: 0,
        col: 0,
      },
    },
    down: {
      2: {
        clue: 'three minus two',
        answer: 'ONE',
        row: 0,
        col: 2,
      },
    },
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <ClientCrossword data={data} />
    </Box>
  )
}
