# Dish Management System

This project is a full-stack application for managing and displaying dish information. It includes a backend API for managing dishes and a frontend dashboard for displaying and interacting with dish data.

-   [Frontend](#frontend)
-   [Backend](#backend)
-   [Acknowledgments](#acknowledgments)

## Project Structure


# backend:

### Description

The backend is built with Node.js, Express, and MongoDB. It provides APIs to fetch dish data and toggle the published status of dishes.

### Installation

1. Navigate to the `backend` dishes data:

```bash
cd backend
```
2. Install the required packages:

```bash
npm install
```
3. Create a `.env` file in the `backend` dishes data and set your MongoDB URI:

```bash
MONGO_URI= your own mongodb Uri here...
PORT=7000
```
4. Populate your dishes.json data file in your data base.

### Running the Backend

To run the backend server using nodemon, use the following command:

```bash
npm start or npx nodemon server.js 
```
This will start the backend server on `http://localhost:7000`.

### Backend Functionalities

- Fetch Dishes: `GET /dishes/all` - Fetch all dishes.
- Toggle Publish Status: `PUT /dishes/:dishId/toggle` - Toggle the published status of a dish by its dishId.

### Code Explanation

- `models/Dish.js`: Mongoose schema and model for dishes.
- `routes/dishes.js`: Routes for fetching and updating dishes.
- `server.js`: Entry point of the backend server, sets up Express and connects to MongoDB using the `.env` file.

# frontend:

### Description
The frontend is built with React. It displays the list of dishes, allows toggling the publish status, and includes a search functionality.

### Installation
1. Navigate to the `frontend` directory:
```bash
cd frontend
```
2. Install the required packages:
```bash
npm install or npx create-react-app
```
### Running the Frontend
To run the frontend development server, use the following command:
```bash
npm start
```
This will start the frontend server on `http://localhost:3000`.

### Frontend Functionalities
- Display Dishes: Display all dishes with their information.

- Toggle Publish Status: Button to toggle the published status of a dish, updating both the UI and backend.

- Search Dishes: Search bar to filter dishes by name.

### Code Explanation
- `src/components/Navbar.js`: Navbar component with search functionality.

- `src/components/Dishes.js`: Main component to display and manage dishes.
- `src/App.js`: Main application component.
- `src/index.js`: Entry point of the frontend application.

## Getting Started
1. Start the Backend: Open a terminal, navigate to the `backend` directory, and run `npx nodemon server.js`.
2. Start the Frontend: Open another terminal, navigate to the `frontend` directory, and run `npm start`.

With both the backend and frontend servers running, you can access the application at `http://localhost:3000`.

### Additional Notes
- Ensure MongoDB is running locally or update the `MONGO_URI` in the `.env` file to point to your MongoDB instance.

- The `dish.json` file in the `backend` directory contains initial data to populate the MongoDB collection if it's empty.

# acknowledgments
- Inspired by various MERN stack tutorials and projects.

```bash

This `README.md` provides a comprehensive guide to your project, including how to set it up, run it, and understand its structure and functionalities. It also includes instructions for using an `.env` file to store your MongoDB URI and other configuration details.
```