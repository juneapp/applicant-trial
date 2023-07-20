// Step 1: Import necessary modules
import * as React from 'react'; // Import the React library
import { Dispatch } from '@reduxjs/toolkit'; // Import the Dispatch type from the Redux Toolkit
import { useDispatch, useSelector } from 'react-redux'; // Import necessary hooks from react-redux
import { fetchProjects } from '../store/reducers/projectReducer'; // Import the fetchProjects action creator from the projectReducer file
import { RootState } from '../store/store'; // Import the RootState type from the store file
import { Project } from '../store/types'; // Import the Project type from the types file

// Step 2: Define the ProjectListPage functional component
const ProjectListPage = () => {
  // Step 3: Get the dispatch function from Redux using the useDispatch hook
  const dispatch: Dispatch<any> = useDispatch();

  // Step 4: Get the 'token' from the 'auth' state in the Redux store using the useSelector hook
  const token = useSelector((state: RootState) => state.auth.token);

  // Step 5: Get the 'projects' array from the 'project' state in the Redux store using the useSelector hook
  const projects: Project[] = useSelector((state: RootState) => state.project.projects);

  // Step 6: Define the fetchProjectsData function using the useCallback hook
  const fetchProjectsData = React.useCallback(async () => {
    try {
      // Step 6.1: Dispatch the fetchProjects action with the 'token' as an argument
      dispatch(fetchProjects(token!));
    } catch (error) {
      // Step 6.2: Handle error if fetching projects fails
      console.error('Error fetching projects:', error);
    }
  }, [token, dispatch]);

  // Step 7: Use the useEffect hook to trigger fetchProjectsData when 'token' changes
  React.useEffect(() => {
    if (token) {
      // Step 7.1: Call the fetchProjectsData function when 'token' changes
      fetchProjectsData();
    }
  }, [token, fetchProjectsData]);

  // Step 8: Return the JSX elements for the project list page
  return (
    <div>
      <h1>Project List Page</h1>
      {/* Step 8.1: Map through the 'projects' array and display each project's name */}
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
};

// Step 9: Export the ProjectListPage component as the default export
export default ProjectListPage;
