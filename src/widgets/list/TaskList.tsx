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

export const TaskList = ({ query }: { query: string }) => {
  const data: TaskInfo[] = [
    {
      id: 1,
      name: 'Название',
      description: 'help',
      author: { firstName: 'me', email: 'aaaa@aaa', lastName: 'a', password: 'a' },
      taskType: TaskType.test,
      maxScore: 10,
      currentScore: 7,
      createdAt: new Date(),
      documentInfo: {} as DocumentInfo,
    },
    {
      id: 2,
      name: 'Название',
      description: 'help',
      author: { firstName: 'me', email: 'aaaa@aaa', lastName: 'a', password: 'a' },
      taskType: TaskType.test,
      maxScore: 10,
      currentScore: 1,
      createdAt: new Date(),
      documentInfo: {} as DocumentInfo,
    },
    {
      id: 3,
      name: 'Название',
      description: 'help',
      author: { firstName: 'me', email: 'aaaa@aaa', lastName: 'a', password: 'a' },
      taskType: TaskType.test,
      maxScore: 10,
      currentScore: 9,
      createdAt: new Date(),
      documentInfo: {} as DocumentInfo,
    },
    {
      id: 4,
      name: 'Название',
      description: 'help',
      author: { firstName: 'me', email: 'aaaa@aaa', lastName: 'a', password: 'a' },
      taskType: TaskType.test,
      maxScore: 10,
      currentScore: 4,
      createdAt: new Date(),
      documentInfo: {} as DocumentInfo,
    },
  ]

  return (
    <Box sx={{ color: 'black' }}>
      <List sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
        {data.map((task) => (
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
