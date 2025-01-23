/**
 * Генерация задания
 * @returns id задания {@link GenerateTaskResult}
 */

export const generateTask = async (
  generateRequest: GenerateTaskRequest,
  token: string
): Promise<GenerateTaskResult> => {
  try {
    return await fetch(
      process.env.NEXT_PUBLIC_BACKEND_CONNECTION + 'task/generator/task/generate',
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
      .then((r) => r as GenerateTaskResult)
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type GenerateTaskResult = {
  taskId: string
}

export type GenerateTaskRequest = {
  taskId: string
  taskName: string
}
