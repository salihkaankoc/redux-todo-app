# Redux To-Do App

This project is a simple To-Do application built with React and Redux using the modern Redux Toolkit. The application allows users to add, remove, and toggle the completion status of To-Do items. To-Do items are persisted in the local storage, so they remain even after refreshing the page.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)

## Features

- Add new To-Do items.
- Remove existing To-Do items.
- Toggle the completion status of To-Do items.
- Persist To-Do items in local storage.
- Built with React and Redux Toolkit for state management.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/salihkaankoc/redux-todo-app
   cd todo-app
2. **Install Dependencies**
     npm install
3. **Start the development server**
     npm start

Usage
Add a new To-Do:

Enter the text for the new To-Do in the input field.
Click the "Add" button or press Enter.
Toggle a To-Do:

Click on the text of the To-Do item to toggle its completion status.
Remove a To-Do:

Click the "Remove" button next to the To-Do item you want to delete.


--Project Structure--

<img width="236" alt="Ekran Resmi 2024-07-25 11 11 56" src="https://github.com/user-attachments/assets/76d1ac44-a54c-4ba6-9a93-d82a457fef3e">


- features/todos/todoSlice.js: Contains the Redux slice for To-Do items.
- components/AddTodo.js: Component for adding new To-Do items.
- components/TodoList.js: Component for displaying the list of To-Do items.
- store/store.js: Configuration of the Redux store.
- App.js: Main application component.
- index.js: Entry point of the application.


In the project directory, you can run:

- npm start: Runs the app in the development mode.
- npm test: Launches the test runner in the interactive watch mode.
- npm run build: Builds the app for production to the build folder.
