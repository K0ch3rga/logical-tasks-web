'use client'

import { uploadDocument } from '@/entities/document'
import { useAuthStore } from '@/entities/store/useAuthStore'
import { JwtUser } from '@/entities/user/User'
import { Button } from '@mui/material'
import { decodeJwt } from 'jose'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, ChangeEventHandler, useRef } from 'react'

export const FileLoader = () => {
  const fileInput = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const path = usePathname()
  const token = useAuthStore().token
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault()
    const { id } = decodeJwt<JwtUser>(token!)

    const formData = new FormData()
    formData.append('file', fileInput?.current?.files?.[0]!)
    formData.append('userId', id)
    formData.append('name', fileInput?.current?.files?.[0].name || 'no name')
    formData.append('description', 'no description')

    if (token) {
      const result = await uploadDocument(formData, token)
      router.push(path + '?documentId=' + result.id)
    }
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
