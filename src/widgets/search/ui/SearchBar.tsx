'use client'

import { Button, TextField } from '@mui/material'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const SearchBar = () => {
  const [query, setInput] = useState('')

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const onSearch = () => {
    const params = new URLSearchParams(searchParams?.toString())
    if (query) {
      params.set('query', query)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }
  useEffect(() => setInput(new URL(window.location.href).searchParams.get('query') || ''), [])

  return (
    <>
      <TextField
        sx={{
          width: 240,
          borderWidth: '1px',
          '& .MuiInput-root': { height: 32 },
          '& .MuiInputBase-root': { backgroundColor: 'white', color: 'black' },
        }}
        size='small'
        value={query}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        onClick={onSearch}
        variant='contained'
        sx={{ borderRadius: 1, alignSelf: 'end', color: 'white' }}
        color='secondary'
      >
        Поиск
      </Button>
    </>
  )
}
