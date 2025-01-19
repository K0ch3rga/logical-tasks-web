import { BACKEND_CONNECTION } from '@/shared/config'
import { Question } from '../Question'

/**
 * Генерация вопросов
 * @returns Список вопросов с id задания {@link GenerateQuestionsResult}
 */

export const generateQuestion = async (
  generateRequest: GenerateQuestionsRequest
): Promise<GenerateQuestionsResult> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOjEsImVtYWlsIjoiaXZhbm92QG1haWwucnUiLCJzdWIiOiJpdmFub3ZAbWFpbC5ydSIsImlhdCI6MTczNzIwNzY1NSwiZXhwIjoxNzM3MzUxNjU1fQ.BTlLRi80pMvCaTnPu4soQTPtyHoDyev5n0vphJevqPE'
  try {
    return await fetch(BACKEND_CONNECTION + 'task/generator/terms/generate', {
      headers: {
        Authorization: 'Bearer ' + session,
      },
      method: 'POST',
      body: JSON.stringify(generateRequest),
    })
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
  taskId: number
  questionsAndAnswers: Question[]
}

export type GenerateQuestionsRequest = {
  taskId: number
  questionsCount: number
}
