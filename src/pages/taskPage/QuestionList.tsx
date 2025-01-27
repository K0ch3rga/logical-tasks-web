import { Box, Button, TextField, Typography } from '@mui/material'

export const QuestionList = ({
  questions,
  answers,
  setAnswer,
}: {
  questions: any[]
  answers: string[]
  setAnswer: (i: number) => (a: string) => void
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {questions.map((q, i) => (
        <Question
          question={q}
          key={i}
          index={i + 1}
          selectAnswer={setAnswer(i)}
          selectedAnswer={answers[i]}
        />
      ))}
    </Box>
  )
}

const Question = ({
  question,
  index,
  selectedAnswer,
  selectAnswer,
}: {
  question: any
  index: number
  selectedAnswer: string
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
        <Typography>{`${index}. ${question.question}`}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 400 }}>
        <ChooseAnswer
          answers={question.answers}
          selectAnswer={selectAnswer}
          selected={selectedAnswer}
        />
        {/* {question.type == 'choose' && (
          <ChooseAnswer answers={question.answers} selectAnswer={selectAnswer} />
        )}
        {question.type == 'type' && <TypeAnswer />} */}
      </Box>
    </Box>
  )
}

const ChooseAnswer = ({
  answers,
  selected,
  selectAnswer,
}: {
  answers: string[]
  selected: string
  selectAnswer: (a: string) => void
}) => {
  console.log()
  return (
    <>
      {answers.map((a, i) => (
        <Button
          variant='contained'
          sx={{
            justifyContent: 'start',
            p: 2,
            backgroundColor: a == selected ? 'secondary.main' : 'primary.light',
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
