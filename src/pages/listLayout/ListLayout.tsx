import { Header } from '@/widgets/header/ui/Header'
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Toolbar,
} from '@mui/material'

export const ListLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const drawerWidth = '20%'

  return (
    <>
      <CssBaseline />
      <Header />
      <Container sx={{ display: 'flex' }}>
        <Drawer
          variant='permanent'
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto', paddingTop: 6 }}>
            <List>
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
        <Box component='main' sx={{ flexGrow: 1, bgcolor: 'white', p: 3, pr: 25 }}>
          {children}
        </Box>
      </Container>
    </>
  )
}
