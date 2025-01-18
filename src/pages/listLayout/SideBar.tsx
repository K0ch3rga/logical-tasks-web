'use client'

import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { usePathname } from 'next/navigation'
import { selectedStyle } from './ui'

export const SideBar = ({ drawerWidth }: { drawerWidth: number }) => {
  const pages = ['Созданные мной', 'Сохраненные']
  const links = ['/mytasks', '/saved']
  const path = usePathname()
  console.log(links[0] === path)

  return (
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
          {pages.map((text, i) => (
            <ListItem key={text} sx={links[i] == path ? selectedStyle : {}}>
              <ListItemButton>
                <ListItemText> {text} </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
