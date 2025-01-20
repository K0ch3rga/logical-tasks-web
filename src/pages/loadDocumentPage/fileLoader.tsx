'use client'

import { uploadDocument } from '@/entities/document'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { ChangeEvent, ChangeEventHandler, useRef } from 'react'

export const FileLoader = () => {
  const fileInput = useRef<HTMLInputElement>(null)
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault()

    const userId = '7b25276d-b967-449f-a240-09c125f0f902'
    const formData = new FormData()
    formData.append('file', fileInput?.current?.files?.[0]!)
    formData.append('userId', userId)
    formData.append('name', fileInput?.current?.files?.[0].name || 'no name')
    formData.append('description', 'no description')

    const result = await uploadDocument(formData)
    const router = useRouter()
    router.query.documentId = result.id
    router.push(router)
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
