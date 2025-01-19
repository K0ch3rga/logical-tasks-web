import { BACKEND_CONNECTION } from '@/shared/config'
import { TaskType } from '../Task'

/**
 * Получение доступных типов задач
 * @returns Массив {@link TaskType} с ссылками на иконки
 *
 */

export const getTaskTypes = async (): Promise<getTaskTypeDTO[]> => {
  const session =
    'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiaWQiOjEsImVtYWlsIjoiaXZhbm92QG1haWwucnUiLCJzdWIiOiJpdmFub3ZAbWFpbC5ydSIsImlhdCI6MTczNzIwNzY1NSwiZXhwIjoxNzM3MzUxNjU1fQ.BTlLRi80pMvCaTnPu4soQTPtyHoDyev5n0vphJevqPE'
  try {
    return await fetch(BACKEND_CONNECTION + 'task/types', {
      headers: {
        Authorization: 'Bearer ' + session,
      },
    })
      .then((r) => (r.ok ? r : Promise.reject(r.status)))
      .then((r) => r.json())
      .then((r) => r as getTaskTypeDTO[])
      .catch((e) => Promise.reject(e))
  } catch (e) {
    console.log(e)
    return Promise.reject(600)
  }
}

export type getTaskTypeDTO = {
  taskTypeName: TaskType
  imageUri: 'string'
}
