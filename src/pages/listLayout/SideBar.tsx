'use client'

import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { usePathname } from 'next/navigation'
import { selectedStyle } from './ui'

export const SideBar = ({ drawerWidth }: { drawerWidth: number }) => {
  const pages: Link[] = [
    { name: 'Созданные мной', path: '/mytasks' },
    { name: 'Сохраненные', path: '/saved' },
  ]
  const path = usePathname()

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
          {pages.map((link) => (
            <ListItem key={link.name} sx={link.path == path ? selectedStyle : {}}>
              <ListItemButton component='a' href={link.path}>
                <ListItemText> {link.name} </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

type Link = {
  name: string
  path: string
}
