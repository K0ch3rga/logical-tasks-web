import { Box, Button, TextField, Typography } from '@mui/material'
import typeIcon from '@public/typeIcon.svg'
import Image from 'next/image'
import selectIcon from '@public/selectIcon.svg'

export const QuestionList = ({ questions }: { questions: any[] }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {questions.map((q, i) => (
        <Question question={q} key={i} index={i + 1} />
      ))}
    </Box>
  )
}

const Question = ({ question, index }: { question: any; index: number }) => {
  return (
    <Box
      sx={{
        color: 'black',
        borderRadius: 1,
        border: '1px solid',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 200,
        gap: 1,
      }}
    >
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Typography>{`${index}. ${question.title}`}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 400, py: 2 }}>
        {question.type == 'choose' && <ChooseAnswer answers={question.answers} />}
        {question.type == 'type' && <TypeAnswer />}
      </Box>
      <Box
        sx={{
          width: 80,
          backgroundColor: 'info.main',
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Image src={typeIcon} alt='typeIcon' />
        <Image src={selectIcon} alt='selectIcon' />
      </Box>
    </Box>
  )
}

const ChooseAnswer = ({ answers }: { answers: string[] }) => {
  return (
    <>
      {answers.map((a, i) => (
        <Button
          variant='contained'
          sx={{
            justifyContent: 'start',
            p: 2,
            backgroundColor: 'primary.light',
            borderColor: 'primary',
          }}
          key={i}
        >
          {a}
        </Button>
      ))}
    </>
  )
}

const TypeAnswer = () => {
  return (
    <>
      <TextField />
    </>
  )
}
