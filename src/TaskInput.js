import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { addTodo } from './Redux/action';

const TaskInput = () => {
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = useState("") // State to store the value of the todo input

  // Function to add todo item
  const addData = () => {
    if (todoValue.trim() !== "") { // Check if todoValue is not empty
      dispatch(addTodo({ value: todoValue, completed: false })) // Dispatches an action to add todo item with value and completion status
      setTodoValue("") // Clears the input field after adding todo
    }
  }

  // Function to handle form submission (when Enter key is pressed)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    addData(); // Calls addData function to add todo item
  }

  return (
    <form onSubmit={handleSubmit}> {/* Form element to handle form submission */}
      <Stack direction={'row'} >
        {/* Text field for entering todo */}
        <TextField
          placeholder='Add todo'
          value={todoValue}
          fullWidth
          onChange={(e) => setTodoValue(e.target.value)} // Updates todoValue state as the user types
          sx={{ backgroundColor: 'white', borderRadius: '10px' }}
        />
        {/* Button to add todo */}
        <Button type="submit" variant="contained" // Added type="submit" to trigger form submission
          sx={{ ml: 2, borderRadius: '10px', width: '100px', fontSize: '16px' }}
          startIcon={<AddCircleOutlineIcon />}
        >
          ADD
        </Button>
      </Stack>
    </form>
  )
}

export default TaskInput
