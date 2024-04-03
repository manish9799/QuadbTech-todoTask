import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector hooks
import { loadTasks } from './Redux/action'; // Importing the action creator to load tasks from local storage

const App = () => {
  const dispatch = useDispatch();

  // Accessing tasks from Redux store state
  const tasks = useSelector(state => state.todoReducer.todoData);

  // Function to load tasks from local storage when the app starts
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      dispatch(loadTasks(JSON.parse(storedTasks)));
    }
  }, [dispatch]); // Adding dispatch to dependencies array to fix missing dependency warning

  // Function to save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // Adding tasks to dependencies array to execute this effect when tasks change

  return (
    <Container>
      <Box
        sx={{
          width: '60%',
          margin: '0 auto',
          backgroundColor: 'black',
          borderRadius: '20px',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          mt: 2
        }}
      >
        <Typography variant='h4' color='white' sx={{ mb: 2 }}>Your Todos</Typography>
        <TaskInput/>
        <TaskList/>
      </Box>
    </Container>
  );
};

export default App;
