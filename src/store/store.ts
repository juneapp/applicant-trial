// Step 1: Import necessary modules
import { combineReducers } from 'redux'; // Import the combineReducers function from Redux
import thunk from 'redux-thunk'; // Import the Redux Thunk middleware
import { configureStore } from '@reduxjs/toolkit'; // Import the configureStore function from Redux Toolkit

import authReducer from './reducers/authReducer'; // Import the authReducer from the reducers folder
import projectReducer from './reducers/projectReducer'; // Import the projectReducer from the reducers folder

// Step 2: Combine the authReducer and projectReducer into the rootReducer
const rootReducer = combineReducers({
  auth: authReducer, // Set 'authReducer' to handle the 'auth' slice of the state
  project: projectReducer, // Set 'projectReducer' to handle the 'project' slice of the state
});

// Step 3: Create the Redux store using configureStore function
export const store = configureStore({
  reducer: rootReducer, // Set the combined rootReducer as the store's reducer
  middleware: [thunk], // Use Redux Thunk middleware to handle asynchronous actions
});

// Step 4: Export the store as the default export
export default store;

// Step 5: Define the RootState type using ReturnType
export type RootState = ReturnType<typeof rootReducer>;
