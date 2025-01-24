'use client'

import Crossword from '@jaredreisinger/react-crossword'
import { CluesInputOriginal, Direction } from '@jaredreisinger/react-crossword/dist/types'
import './ui/crossword.css'
import { Answer } from './model'

export const ClientCrossword = ({
  data,
  onWordComplete,
}: {
  data: CluesInputOriginal
  onWordComplete: (a: Answer) => void
}) => {
  const handleCompleteWord = (
    direction: Direction,
    number: string,
    correct: boolean,
    answer: string
  ) => {
    onWordComplete({
      answer: answer,
      correct: correct,
      clueNumber: Number.parseInt(number),
      direction: direction,
    })
  }
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
      onAnswerComplete={handleCompleteWord}
    />
  )
}
