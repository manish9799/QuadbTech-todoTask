export const loadTasks = (tasks) => ({
    type: 'LOAD_TASKS',
    payload: tasks,
  });

export const addTodo =(data)=>{
    return {
        type:"ADD_TODO",
        payload:data
    }
}
export const toggleTodo =(data)=>{
    return {
        type:"TOGGLE_TODO",
        payload:data
    }
}

export const deleteTodo =(data)=>{
    return {
        type:"DELETE_TODO",
        payload:data
    }
}