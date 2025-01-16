import { AppBar, Avatar, Box, IconButton, SvgIcon, Toolbar, Typography } from '@mui/material'
import logo from '@public/logo.svg'

export const Header = () => {
  const name = 'Иванов Иван'
  const image = undefined
  console.log(logo)

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
        <SvgIcon sx={{ width: logo.width, height: logo.height }}>
          <image href={logo.src} height={logo.height} width={logo.width} />
        </SvgIcon>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', px: 2 }}>
          <Typography>{name}</Typography>
          <Avatar sx={{ height: 32, width: 32, bgcolor: 'secondary.main' }} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
