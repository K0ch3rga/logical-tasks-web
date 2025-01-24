'use client'

import { useAuthStore } from '@/entities/store/useAuthStore'
import { JwtUser } from '@/entities/user/User'
import { Avatar, Box, Typography } from '@mui/material'
import { decodeJwt } from 'jose'

export const Profile = () => {
  const token = useAuthStore().token
  if (token) {
    const { firstName, lastName } = decodeJwt<JwtUser>(token)
    return (
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', px: 2 }}>
        <Typography>{firstName + ' ' + lastName}</Typography>
        <Avatar sx={{ height: 32, width: 32, bgcolor: 'secondary.main' }} />
      </Box>
    )
  } else
    return (
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', px: 2 }}>
        <Typography>Аноним</Typography>
      </Box>
    )
}
