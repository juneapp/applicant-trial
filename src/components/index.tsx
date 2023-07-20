// Step 1: Import necessary modules
import * as React from 'react'; // Import the React library
import { useSelector } from 'react-redux'; // Import the Provider component from react-redux
import  { RootState } from '../store/store'; // Import the Redux store from the store folder
import LoginPage from './LoginPage'; // Import the LoginPage component from the components folder
import ProjectListPage from './ProjectListPage'; // Import the ProjectListPage component from the components folder

// Step 2: Define the App functional component
const App = () => {
    // Step 2.1: Get the User token
    const token = useSelector((state: RootState) => state.auth.token);
  
    // Step 2.2: Render the Provider component to connect the Redux store to the app
    // Step 2.3: Inside the Provider component, render the ProjectListPage component if the user is logged in and there's token, otherwise render the LoginPage component
    return (
        <div className='container'>
          {token ? (
            <ProjectListPage />
          ) : (
            <LoginPage />
          )}
        </div>
    );
  };

// Step 3: Export the App component as the default export
export default App;
