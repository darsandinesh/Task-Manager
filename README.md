# Task Manager Application

## Overview

The **Task Manager Application** is a full-stack task management tool that allows users to sign up, log in, and manage their tasks (CRUD operations). Users can add, update, and delete tasks. This app is built using **React** for the frontend and **Node.js** with **MongoDB** for the backend. The app supports user authentication, secure access to tasks, and features a clean and responsive UI.

---

## Technologies Used

### Frontend:
- React
- Axios (for HTTP requests and interceptors)
- React Router (for public and private routes)
- TailwindCSS (for styling)
- CSS (for custom styling)

### Backend:
- Node.js
- Express.js (for handling API requests)
- MongoDB (for data storage)
- JWT (for authentication)
- Mongoose (for MongoDB object modeling)

---

## Features
- User Authentication (Login/Signup)
- Add, Update, and Delete tasks
- Display tasks in a list format
- Responsive UI with custom and utility-based styling (TailwindCSS)
- Axios interceptors for handling API requests
- Public and Private routes for secure routing

---

## Setup Instructions

Follow these steps to set up the project locally:

---

1. **Clone the repository:**
```bash
   git clone https://github.com/darsandinesh/Task-Manager
```
### Backend Setup

Navigate to the backend folder:
    
```bash
    cd Backend
```
Install the backend dependencies:
```bash
    npm install
```
Create a .env file in the backend directory and add the following variables:
```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
```
Start the backend server:
```bash
    npm start
```
The backend server will be running at http://localhost:8000.

### Backend Setup

Navigate to the frontend folder:
```bash
    cd ../frontend
```
Install the frontend dependencies:
 ```bash
    npm install
```
Create a .env file in the frontend directory and add the following variable:
 ```bash

    VITE_BACKEND_URL = http://localhost:8000
```
Start the frontend development server:
 ```bash
    npm start
```
The frontend will be running at http://localhost:5173.
