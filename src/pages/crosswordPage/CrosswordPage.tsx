import Crossword from '@jaredreisinger/react-crossword'
import { Box, Button } from '@mui/material'
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
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex' }}>
        <ClientCrossword data={data} />
      </Box>
      <Button
        variant='contained'
        color='secondary'
        sx={{ width: 300, color: 'white', alignSelf: 'end' }}
      >
        Проверить
      </Button>
    </Box>
  )
}
