import { Question } from '../Question'

/**
 * Генерация вопросов
 * @returns Список вопросов с id задания {@link GenerateQuestionsResult}
 */

export const generateQuestion = async (
  generateRequest: GenerateQuestionsRequest,
  token: string
): Promise<GenerateQuestionsResult> => {
  try {
    return await fetch(
      process.env.NEXT_PUBLIC_BACKEND_CONNECTION + 'task/generator/questions/generate',
      {
        headers: {
          Authorization: 'Bearer ' + token,
          'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(generateRequest),
      }
    )
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as GenerateQuestionsResult)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type GenerateQuestionsResult = {
  taskId: string
  questions: Question[]
}

export type GenerateQuestionsRequest = {
  taskId: string
  questionsCount: number
}
