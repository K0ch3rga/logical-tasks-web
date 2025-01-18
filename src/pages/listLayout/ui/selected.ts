import { SxProps, Theme } from '@mui/material'

export const selectedStyle: SxProps<Theme> = {
  pr: 0,
  '& .MuiTypography-root': { textAlign: 'end' },
  '& .MuiButtonBase-root': { backgroundColor: 'primary.main' },
}
