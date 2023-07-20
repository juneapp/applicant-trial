// Step 1: Import necessary modules
import { AuthState } from '../types'; // Import the AuthState type from the types file
import axios from 'axios'; // Import the Axios library for making HTTP requests
import {
  AnyAction,
  createSlice,
  Dispatch,
  PayloadAction,
} from '@reduxjs/toolkit'; // Import necessary functions/types from Redux Toolkit
import { baseUrl } from '../../api'; // Import the baseUrl from the api file

// Step 2: Initialize the initialState for the AuthState
const initialState: AuthState = {
  token: '', // Initial value for the token property
  email: '', // Initial value for the email property
  password: '', // Initial value for the password property
};

// Step 3: Create a Redux slice using createSlice function
const userSlice = createSlice({
  name: 'user', // Specify the name of the slice
  initialState: initialState, // Set the initial state using the defined AuthState
  reducers: {
    // Step 3.1: Define the 'getUserAction' and 'loginUserAction' reducers
    getUserAction: (state: any, {payload}: PayloadAction<any>) => {
      state.user = payload; // Modify the 'user' property of the state with the payload
    },
    loginUserAction: (state: any, {payload}: PayloadAction<any>) => {
      state.user = payload; // Modify the 'user' property of the state with the payload
    },
  },
});

// Step 4: Extract the action creators from the userSlice
export const {
  loginUserAction,
} = userSlice.actions;

// Step 5: Define the 'loginUser' async action creator
export const loginUser =
  (username: string, password: string) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const endpoint = 'auth/login_check';
      const credentials = JSON.stringify({ username, password });
      // Step 5.1: Make a POST request to the API to log in the user with the given credentials
      const response = await axios.post(`${baseUrl}${endpoint}`, credentials, {
        headers: { 'Content-Type': 'application/json' },
      });

      const data = response.data;
      // Step 5.2: Dispatch the 'loginUserAction' with the data received from the API
      dispatch(loginUserAction(data));
    } catch (error: any) {
      // Step 5.3: Handle errors if login fails
      console.log(
        'LOGIN USER ERROR',
        error.response?.status,
        error.response?.data,
      );
    }
  };

// Step 6: Export the reducer function from the userSlice
export default userSlice.reducer;
