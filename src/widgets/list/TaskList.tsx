import { TaskInfo } from '@/entities/task'
import { Bookmark } from '@mui/icons-material'
import { Box, Button, IconButton, LinearProgress, List, ListItemButton } from '@mui/material'

const resolveColor = (percent: number) => {
  if (percent >= 80) return 'success'
  else if (percent >= 60) return 'info'
  else if (percent >= 40) return 'warning'
  else if (percent >= 0) return 'error'
  else return 'primary'
}

export const TaskList = ({
  tasks,
  query,
  scores,
}: {
  tasks: TaskInfo[]
  query: string
  scores?: number[]
}) => {
  return (
    <Box sx={{ color: 'black' }}>
      <List sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
        {tasks.map((task, i) => (
          <TaskItem task={task} key={task.id} score={scores?.[i] ?? 0} />
        ))}
      </List>
    </Box>
  )
}

const TaskItem = ({ task, score }: { task: TaskInfo; score: number }) => {
  const path = window.location.origin + '/test/' + task.id
  const share = (event: any) => {
    event.preventDefault()
    saveToClipboard(path)
  }
  return (
    <ListItemButton sx={{ borderRadius: 1, boxShadow: 2 }} component='a' href={path}>
      {task.name}
      <Box sx={{ flexGrow: 1, flexBasis: 0 }} />
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
        <LinearProgress
          variant='determinate'
          sx={{
            width: 300,
            height: 8,
            border: 0.5,
            borderRadius: 4,
            borderColor: 'lightgray',
          }}
          color={resolveColor((score / task.maxScore) * 100)}
          value={(score / task.maxScore) * 100}
        />
        {Math.round((score / task.maxScore) * 100)}%
      </Box>
      <IconButton color='primary'>
        <Bookmark />
      </IconButton>
      <Button variant='contained' onClick={share}>
        Поделиться
      </Button>
    </ListItemButton>
  )
}

const saveToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}
