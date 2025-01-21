'use client'

import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { ProgressTracker } from './ProgressTracker'
import { QuestionList } from './QuestionList'

export const ClientTestEdit = ({ questions, meta }: { questions: any[]; meta: any }) => {
  const [progress, setProgress] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', color: 'black' }}>
        <Typography variant='h2'>{meta.name}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <ProgressTracker progress={progress} totalQuestions={questions.length} time={startTime} />
      </Box>
      <QuestionList questions={questions} />
    </>
  )
}
