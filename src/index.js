import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for creating a root
import './index.css';
import App from './App'; // Importing the main App component
import rootReducer from './Redux/index' // Importing the root reducer for Redux
import { createStore } from 'redux'; // Importing createStore function from Redux
import { Provider } from 'react-redux'; // Importing Provider component from react-redux for Redux integration

// Creating a root instance for rendering React application
const root = ReactDOM.createRoot(document.getElementById('root'));
// Creating a Redux store with the root reducer
const store = createStore(rootReducer);

// Rendering the React application wrapped with the Redux Provider component
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

