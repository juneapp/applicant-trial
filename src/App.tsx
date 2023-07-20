// Step 1: Import necessary modules
import * as React from "react";
import store from "./store/store"; // Import the Redux store from the store folder
import Main from "./components/index";
import { Provider } from "react-redux";
import './App.css'
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
