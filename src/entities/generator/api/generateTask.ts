import { BACKEND_CONNECTION } from '@/shared/config'

/**
 * Генерация задания
 * @returns id задания {@link GenerateTaskResult}
 */

export const generateTask = async (
  generateRequest: GenerateTaskRequest
): Promise<GenerateTaskResult> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOjEsImVtYWlsIjoiaXZhbm92QG1haWwucnUiLCJzdWIiOiJpdmFub3ZAbWFpbC5ydSIsImlhdCI6MTczNzIwNzY1NSwiZXhwIjoxNzM3MzUxNjU1fQ.BTlLRi80pMvCaTnPu4soQTPtyHoDyev5n0vphJevqPE'
  try {
    return await fetch(BACKEND_CONNECTION + 'task/generator/task/generate', {
      headers: {
        Authorization: 'Bearer ' + session,
      },
      method: 'POST',
      body: JSON.stringify(generateRequest),
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as GenerateTaskResult)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type GenerateTaskResult = {
  taskId: number
}

export type GenerateTaskRequest = {
  taskId: number
}
