// Step 1: Import necessary modules
import { Dispatch } from '@reduxjs/toolkit'; // Import the Dispatch type from the Redux Toolkit
import * as React from 'react'; // Import the React library
import { useDispatch, useSelector } from 'react-redux'; // Import necessary hooks from react-redux
import { loginUser } from '../store/reducers/authReducer'; // Import the loginUser action creator from the authReducer file

// Step 2: Define the LoginPage functional component
const LoginPage = () => {
  // Step 3: Initialize state using React's useState hook
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // Step 4: Get the dispatch function from Redux using the useDispatch hook
  const dispatch: Dispatch<any> = useDispatch();

  // Step 6: Define the handleLogin asynchronous function
  const handleLogin = async () => {
    try {
      // Step 6.1: Dispatch the loginUser action with the email and password from 'userData'
      dispatch(loginUser(email, password));
    } catch (error) {
      // Step 6.2: Handle login error (not implemented in this code)
    }
  };

  // Step 7: Return the JSX elements for the login page
  return (
    <div className='loginWrapper' style={{color: "gray"}}>
      <h2>Dear user, <br />log in to access your projects.</h2>
      {/* Step 7.1: Render Username label and input with value and onChange event */}
      <label>Username</label>
      <input
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Step 7.2: Render password input with value and onChange event */}
     <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Step 7.3: Render 'Login' button with onClick event */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Export the LoginPage component as the default export
export default LoginPage;
