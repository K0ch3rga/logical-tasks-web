import { Header } from '@/widgets/header/ui/Header'
import { Box, CssBaseline } from '@mui/material'
import { SideBar } from './SideBar'

export const ListLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const drawerWidth = 243

  return (
    <>
      <CssBaseline />
      <Header />
      <Box
        sx={{
          display: 'flex',
          maxWidth: 1200,
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'primary.light',
        }}
      >
        <SideBar drawerWidth={drawerWidth} />
        <Box component='main' sx={{ flexGrow: 1, bgcolor: 'white', px: 3, py: 2, height: '100%' }}>
          {children}
        </Box>
      </Box>
    </>
  )
}
