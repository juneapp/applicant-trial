// Step 1: Define the AuthState interface
export interface AuthState {
  token?: string; // The 'token' property is optional and represents the authentication token of the user
  email?: string; // The 'email' property is optional and represents the email address of the user
  password?: string; // The 'password' property is optional and represents the password of the user
}

// Step 2: Define the Project interface
export interface Project {
  id: number; // The 'id' property represents the unique identifier of a project and is of type number
  name: string; // The 'name' property represents the name of a project and is of type string
}

// Step 3: Define the ProjectState interface
export interface ProjectState {
  projects: Project[]; // The 'projects' property is an array of Project objects, representing the state of projects in the application
}
