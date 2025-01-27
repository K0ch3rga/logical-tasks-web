import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import logo from '@public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Profile } from './Profile'

export const Header = () => {
  const name = 'Иванов Иван'
  const image = undefined

  return (
    <AppBar
      position='sticky'
      sx={{
        background: 'primary.main',
        zIndex: 1201, //(theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ maxWidth: 1200, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
        {/* <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}> */}
        <Link href={'#'}>
          <Image priority src={logo} alt='logo' />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Profile />
      </Toolbar>
    </AppBar>
  )
}
