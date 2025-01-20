import { Box, Button, TextField, Typography } from '@mui/material'

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
        p: 2,
        borderRadius: 1,
        border: '1px solid',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 200,
      }}
    >
      <Box sx={{ flexGrow: 1, px: 2 }}>
        <Typography>{`${index}. ${question.title}`}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 400 }}>
        {question.type == 'choose' && <ChooseAnswer answers={question.answers} />}
        {question.type == 'type' && <TypeAnswer />}
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
