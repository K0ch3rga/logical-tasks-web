import {
  AppBar,
  Box,
  Button,
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
  console.log(children)

  const drawerWidth = 200

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          background: 'lightgray',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'end',
          }}
        >
          <Button sx={{ bgcolor: 'yellow' }}></Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Box sx={{ p: 8, paddingTop: 10 }}>
          <Skeleton variant='circular' width={84} height={84} />
          nickname
        </Box>
        <Divider />
        <List disablePadding>
          {[1, 2, 3, 4].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1, bgcolor: 'white', p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
