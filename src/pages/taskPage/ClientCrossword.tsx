'use client'

import Crossword from '@jaredreisinger/react-crossword'
import './ui/crossword.css'

export const ClientCrossword = ({ data }: { data: any }) => {
  return (
    <Crossword
      data={data}
      theme={{
        gridBackground: 'transparent',
        cellBorder: '0px',
        cellBackground: '#C7C7C7',
        allowNonSquare: true,
        textColor: 'black',
        highlightBackground: '#FD711840',
        focusBackground: '#FD711880',
      }}
      acrossLabel={'По горизонтали:'}
      downLabel={'По вертикали:'}
    />
  )
}
