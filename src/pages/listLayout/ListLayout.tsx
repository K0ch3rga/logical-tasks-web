import { Header } from '@/widgets/header/ui/Header'
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'

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
          height: 'calc(100svh - 64px)',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'primary.light',
        }}
      >
        <Drawer
          variant='permanent'
          sx={{
            backgroundColor: 'primary.light',
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              position: 'static',
              backgroundColor: 'primary.light',
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: drawerWidth,
              overflow: 'auto',
              pt: 6,
            }}
          >
            <List sx={{ bg: '#C3C3C366' }}>
              {['В процессе', 'Созданные мной', 'Сохраненные'].map((text) => (
                <ListItem key={text}>
                  <ListItemButton>
                    <ListItemText> {text} </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component='main' sx={{ flexGrow: 1, bgcolor: 'white', px: 3, py: 2 }}>
          {children}
        </Box>
      </Box>
    </>
  )
}
