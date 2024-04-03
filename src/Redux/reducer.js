const initialState = {
    todoData: [],
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_TASKS':
            return {
              ...state,
              todoData: action.payload,
            };
        case "ADD_TODO":
            return {
                ...state,
                todoData: [...state.todoData,action.payload]
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                todoData: action.payload
            }
        case "DELETE_TODO":
            return {
                ...state,
                todoData: action.payload
            }
        default:
            return state;
    }
}

