// Step 1: Import necessary modules
import axios from 'axios'; // Import the Axios library for making HTTP requests
import { createSlice, Dispatch, PayloadAction, ThunkAction } from '@reduxjs/toolkit'; // Import necessary functions/types from Redux Toolkit
import { Project, ProjectState } from '../types'; // Import the Project and ProjectState types from the types file
import { baseUrl } from '../../api'; // Import the baseUrl from the api file

// Step 2: Initialize the initialState for the ProjectState
const initialState: ProjectState = {
  projects: [], // Initial value for the projects array
};

// Step 3: Create a Redux slice using createSlice function
const projectSlice = createSlice({
  name: 'project', // Specify the name of the slice
  initialState, // Set the initial state using the defined ProjectState
  reducers: {
    // Step 3.1: Define the 'getProjectsAction' reducer
    getProjectsAction: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload; // Modify the 'projects' property of the state with the payload
    },
  },
});

// Step 4: Extract the action creators from the projectSlice
export const { getProjectsAction } = projectSlice.actions;

// Step 5: Define the 'fetchProjects' async action creator
export const fetchProjects = (token: string) => async (dispatch: Dispatch<any>) => {
  try {
    const endpoint = 'v2/project';
    const apiUrl = `${baseUrl}${endpoint}`;
    console.log('apiUrl', apiUrl);

    // Step 5.1: Make a GET request to the API to fetch projects with the provided token
    const response = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.data;
    console.log('Projects Fetched reducer', data);
    const { projects } = data;
    // Step 5.2: Dispatch the 'getProjectsAction' with the fetched projects data
    dispatch(getProjectsAction(projects));
  } catch (error: any) {
    // Step 5.3: Handle errors if fetching projects fails
    console.log(
      'Get Projects Error:',
      error.response?.status,
      error.response?.data,
    );
  }
};

// Step 6: Export the reducer function from the projectSlice
export default projectSlice.reducer;
