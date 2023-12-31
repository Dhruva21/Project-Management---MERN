# Project Management - MERN

Screenshot of the Web Application

<img width="1359" alt="Screenshot 2023-02-06 at 3 28 02 PM" src="https://user-images.githubusercontent.com/54857981/217110379-ccdc3fd4-a282-4c2e-bc7a-4b61fe502061.png">

## Overview

Project Management is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). The application is designed to manage client and project information efficiently.

## Features

- **Client and Project Management:** Easily add, view, and manage client and project information.

- **User-Friendly Interface:** The front page of the application provides a clean and user-friendly interface for quick access to project and client details.

- **Styling with Bootstrap:** Bootstrap classes have been utilized to enhance the styling and overall aesthetic appeal of the application.

## Technologies Used

- **Frontend:** React.js is used for the client-side development. The application leverages Bootstrap for responsive and visually appealing UI components. Apollo Client is integrated to write queries to the GraphQL endpoint.

- **Backend:** The server is powered by GraphQL, providing a flexible and efficient way to interact with the database.

- **Database:** MongoDB serves as the database for storing client and project information.

## Deployment

- **Frontend** (Vercel): The client-side of the application is deployed on Vercel. You can access the live version at https://project-management-mern.vercel.app/.

- **Backend** (Render): The server-side of the application is deployed on Render. The GraphQL endpoint is hosted at render.com.
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Project-Management-MERN.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Project-Management-MERN
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the `server` directory.
   - Add the MongoDB connection string and any other necessary variables.

5. Run the application:

   ```bash
   To run the front end navigate to client directory and issue npm start
   
   To run the backend of the app navigate to server directory and issue node index.js (entry point of the backend code). Backend runs localhost: 4000
   ```

   The application should be accessible at [http://localhost:3000/](http://localhost:3000/).
