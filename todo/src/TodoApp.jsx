import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from './store'
import {
  Box,
  Button,
  Flex,
  Input,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'

export function TodoApp() {
  const [task, setTask] = useState('')
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (task.trim() === '') return
    dispatch(addTodo(task))
    setTask('')
  }

  return (
    <Box maxW="400px" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="md">
      <Flex mb={4}>
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter todo"
          mr={2}
        />
        <Button colorScheme="teal" onClick={handleAdd}>Add</Button>
      </Flex>

      <List spacing={3}>
        {todos.map(todo => (
          <ListItem
            key={todo.id}
            p={2}
            borderWidth="1px"
            borderRadius="md"
            bg={todo.status ? 'green.50' : 'white'}
          >
            <Flex justify="space-between" align="center">
              <Text
                as={todo.status ? 'del' : undefined}
                cursor="pointer"
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.title}
              </Text>
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
