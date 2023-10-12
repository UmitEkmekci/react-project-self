# TodoList Application with React

## Overview

Welcome to the TodoList Application built with React! This application is designed to offer a seamless user experience for task management. With a sleek interface and intuitive functionality, users can effortlessly create, update, delete, and search tasks. This application was based on Javascript ES6 and React props and hook of state.

## Main Features

### App

The heart of the application. The `App` component serves as the central hub, integrating all the other components. It maintains the core state of the application, handling operations like task addition and deletion.

### TaskCreate

An interactive component designed for users to add new tasks. It ensures that users provide valid input through its built-in validation mechanisms, ensuring the integrity of the task list.

### TaskList

A visual representation of all tasks. This component fetches data from the main state and renders each task using the `EachTask` component, providing a clear and concise view of all tasks.

### EachTask

A component dedicated to individual task management. Users can easily view task details, update its content, or remove it entirely. During updates, the display conveniently switches to input fields for user modifications.

### FilterInputBar

A powerful search functionality that enables users to swiftly find tasks based on keywords. The component enhances user experience by displaying a loading state with the `LoadingPage` component while fetching results, ensuring users are always informed.

### LoadingPage

A minimalist component designed to inform users when the application is processing data, especially during search operations. It displays a straightforward "Loading..." message.

### FilterOutputList

After users initiate a search via the `FilterInputBar`, this component jumps into action, showcasing the search results. It provides a summary of the number of items found and lists the tasks that match the search criteria, ensuring users can quickly find what they're looking for.

## Getting Started

1. **Clone & Setup**: Start by cloning this repository to your local machine. Once done, navigate to the project directory.
2. **Install Dependencies**: Run `npm install` to fetch and install all the necessary dependencies required for the application to function smoothly.
3. **Launch the App**: Kickstart the development server by running `npm start`.
4. **Access the App**: Open your favorite browser and visit `http://localhost:3000` to dive into the TodoList Application!

## User Guide

1. **Task Creation**: Navigate to the `TaskCreate` section. Input a title and a task description. Hit the "Add" button or simply press Enter to add the task to the list.
2. **Task Management**: In the `TaskList`, click on the "Update" button beside a task to modify its details. After making your changes, click the save icon. To remove a task, click the "Delete" button.
3. **Swift Search**: Use the `FilterInputBar` to type in a keyword. Press the "SEARCH" button or Enter to initiate the search. The `FilterOutputList` will display the results below.

## Contribution & Feedback

Your feedback is invaluable! Feel free to fork this repository, introduce your changes, and submit pull requests. Any feedback, suggestions, or bug reports are highly appreciated. Together, we can make this application even better!

