import { BACKEND_CONNECTION } from '@/shared/config'
import { Question } from '../Question'

/**
 * Обновление вопросов
 * @returns Новый список вопросов с id задания {@link UpdateQuestionsResult}
 */

export const updateQuestions = async (
  generateRequest: UpdateQuestionsRequest,
  token: string
): Promise<UpdateQuestionsResult> => {
  try {
    return await fetch(BACKEND_CONNECTION + 'task/generator/questions/update', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      method: 'PUT',
      body: JSON.stringify(generateRequest),
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as UpdateQuestionsResult)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type UpdateQuestionsRequest = {
  taskId: string
  questionsAndAnswers: Question[]
}

export type UpdateQuestionsResult = UpdateQuestionsRequest
