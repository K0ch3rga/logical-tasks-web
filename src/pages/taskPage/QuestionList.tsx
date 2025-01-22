import { Box, Button, TextField, Typography } from '@mui/material'

export const QuestionList = ({
  questions,
  setAnswer,
}: {
  questions: any[]
  setAnswer: (i: number) => (a: string) => void
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {questions.map((q, i) => (
        <Question question={q} key={i} index={i + 1} selectAnswer={setAnswer(i)} />
      ))}
    </Box>
  )
}

const Question = ({
  question,
  index,
  selectAnswer,
}: {
  question: any
  index: number
  selectAnswer: (a: string) => void
}) => {
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
        {question.type == 'choose' && (
          <ChooseAnswer answers={question.answers} selectAnswer={selectAnswer} />
        )}
        {question.type == 'type' && <TypeAnswer />}
      </Box>
    </Box>
  )
}

const ChooseAnswer = ({
  answers,
  selectAnswer,
}: {
  answers: string[]
  selectAnswer: (a: string) => void
}) => {
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
          onClick={() => selectAnswer(a)}
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
