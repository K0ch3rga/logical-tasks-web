import { Box, Typography, TextField } from '@mui/material'

export const LabeledInput = ({
  title,
  value,
  setState,
  disabled = false,
  width = 80,
}: {
  title: string
  value: string
  setState?: (v: string) => void
  disabled?: boolean
  width?: number
}) => {
  return (
    <Box>
      <Typography color='primary.main'>{title}</Typography>
      <TextField
        variant='outlined'
        disabled={disabled}
        value={value}
        onChange={(e) => setState?.(e.target.value)}
        sx={{
          '& .MuiInputBase-root': {
            backgroundColor: 'grey.50',
            color: 'primary.main',
            borderRadius: 0,
          },
          '& .MuiOutlinedInput-input': { p: 1, width: width },
          '& .MuiOutlinedInput-notchedOutline': { borderWidth: 0 },
        }}
      />
    </Box>
  )
}
