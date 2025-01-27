export type Answer = {
  direction: 'across' | 'down'
  clueNumber: number
  correct: boolean
  answer: string
}

export type AnswerContainer = {
  across: Answer[]
  down: Answer[]
}
