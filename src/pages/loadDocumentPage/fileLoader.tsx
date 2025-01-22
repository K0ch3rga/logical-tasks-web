'use client'

import { uploadDocument } from '@/entities/document'
import { Button } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, ChangeEventHandler, useRef } from 'react'

export const FileLoader = () => {
  const fileInput = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const path = usePathname()
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault()

    const userId = '6ba4855f-70a9-43a0-b4b6-81c9c6b8deda'
    const formData = new FormData()
    formData.append('file', fileInput?.current?.files?.[0]!)
    formData.append('userId', userId)
    formData.append('name', fileInput?.current?.files?.[0].name || 'no name')
    formData.append('description', 'no description')

    const result = await uploadDocument(formData)
    router.push(path + '?documentId=' + result.id)
  }
  return (
    <>
      <input
        accept='*'
        hidden
        id='file-upload'
        type='file'
        onChange={handleFileChange}
        ref={fileInput}
      />
      <label htmlFor='file-upload'>
        <Button variant='contained' color='secondary' sx={{ color: 'white' }} component='span'>
          Загрузка файла
        </Button>
      </label>
    </>
  )
}
