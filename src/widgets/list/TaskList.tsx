import { TaskInfo, TaskType } from '@/entities/task'
import { DocumentInfo } from '@/entities/task/Task'
import { Bookmark } from '@mui/icons-material'
import { Box, Button, IconButton, LinearProgress, List, ListItemButton } from '@mui/material'

const resolveColor = (percent: number) => {
  if (percent >= 80) return 'success'
  else if (percent >= 60) return 'info'
  else if (percent >= 40) return 'warning'
  else if (percent >= 0) return 'error'
  else return 'primary'
}

export const TaskList = ({ tasks, query }: { tasks: TaskInfo[]; query: string }) => {
  return (
    <Box sx={{ color: 'black' }}>
      <List sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
        {tasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </List>
    </Box>
  )
}

const TaskItem = ({ task }: { task: TaskInfo }) => {
  return (
    <ListItemButton sx={{ borderRadius: 1, boxShadow: 2 }}>
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
          color={resolveColor((task.currentScore / task.maxScore) * 100)}
          value={(task.currentScore / task.maxScore) * 100}
        />
        {(task.currentScore / task.maxScore) * 100}%
      </Box>
      <IconButton color='primary'>
        <Bookmark />
      </IconButton>
      <Button variant='contained'>Поделиться</Button>
    </ListItemButton>
  )
}
