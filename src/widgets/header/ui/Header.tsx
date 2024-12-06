import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Skeleton,
  Toolbar,
  Typography,
} from '@mui/material'

export const Header = () => {
  const name = 'Иванов Иван'
  const image = undefined

  return (
    <AppBar
      position='sticky'
      sx={{
        width: `100%`,
        background: '#C3C3C3',
        zIndex: 1201, //(theme) => theme.zIndex.drawer + 1,
        px: 25,
      }}
    >
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
          Logo
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', px: 2 }}>
          <Typography>{name}</Typography>
          <Avatar sx={{ height: 32, width: 32, bgcolor: '#FED84C' }} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
