import { Button, Stack, TextField, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { addTodo } from './Redux/action';

const TaskInput = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const isSmallScreen = useMediaQuery('(max-width:700px)');

  const addData = () => {
    if (todoValue.trim() !== "") {
      dispatch(addTodo({ value: todoValue, completed: false }));
      setTodoValue("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={2}>
        <TextField
          placeholder='Add todo'
          value={todoValue}
          fullWidth={isSmallScreen}
          onChange={(e) => setTodoValue(e.target.value)}
          sx={{ backgroundColor: 'white', borderRadius: '10px' }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            ml: isSmallScreen ? 0 : 2,
            mt: isSmallScreen ? 2 : 0,
            borderRadius: '10px',
            width: isSmallScreen ? '100%' : '100px',
            fontSize: '16px',
          }}
          startIcon={<AddCircleOutlineIcon />}
        >
          ADD
        </Button>
      </Stack>
    </form>
  );
};

export default TaskInput;
