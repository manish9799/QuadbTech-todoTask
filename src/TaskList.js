import { Card, Checkbox, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from './Redux/action';

const TaskList = () => {
  const dispatch = useDispatch()
  const todoData = useSelector((state) => state.todoReducer.todoData); // Fetching todo data from Redux store
  const [todoList, setTodoList] = useState([]) // State to store todo list

  useEffect(() => {
    // Update todoList state when todoData changes
      setTodoList(todoData)
  }, [todoData])

  // Function to delete a todo item
  const deleteData = (id) => {
    let updateData = todoList?.filter((item, i) => i !== id)
    dispatch(deleteTodo(updateData)) // Dispatching action to delete todo item
  }

  // Function to toggle completion status of a todo item
  const toggleComplete = (id) => {
    const updatedTodoList = todoList.map((item, i) =>
      i === id ? { ...item, completed: !item.completed } : item
    );
    dispatch(toggleTodo(updatedTodoList)); // Dispatching action to toggle completion status
  }

  return (
    <>
      {todoList?.length ?
        // Rendering todo list if it's not empty
        <Card
          sx={{ backgroundColor: 'black', border: '2px solid white', width: '90%', borderRadius: '20px', mt: 4, p: 2 }}>
          {todoList?.map((item, i) => (
            <Stack key={i} direction={'row'} sx={{ borderBottom: '2px solid white', display: 'flex', alignItems: 'center', width: '90%', margin: '0 auto', justifyContent: 'space-between' }}>
              {/* Checkbox to toggle completion status */}
              <Checkbox
                sx={{ color: 'white' }}
                checked={item.completed}
                onChange={() => toggleComplete(i)}
                color="success"
              />
              {/* Todo item text with strike-through if completed */}
              <Typography
                variant='h6'
                color='white'
                sx={{ textDecoration: item.completed ? 'line-through' : 'none' }}
              >
                {item?.value || "-"}
              </Typography>
              {/* IconButton to delete the todo item */}
              <IconButton aria-label="delete" onClick={() => deleteData(i)}>
                <DeleteIcon color='error' />
              </IconButton>
            </Stack>
          ))}
        </Card> :
        // Displaying a message if there are no todos
        <Typography variant='h6' color='white' sx={{ p: 2 }} >You have no todos</Typography>
      }
    </>
  )
}

export default TaskList
