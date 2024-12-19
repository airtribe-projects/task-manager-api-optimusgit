# Task Manager API

This is a simple RESTful API for managing tasks, built with Node.js and Express.js. The API supports CRUD operations for creating, reading, updating, and deleting tasks. It uses in-memory data storage and includes features like input validation and error handling.

---

## Features
- **Create Tasks**: Add new tasks with a name and completion status.
- **Read Tasks**: Fetch all tasks or a specific task by ID.
- **Update Tasks**: Modify task details or mark tasks as completed.
- **Delete Tasks**: Remove tasks by ID.
- **Error Handling**: Provides meaningful error responses for invalid input or missing tasks.
- **Input Validation**: Ensures task data is valid.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/airtribe-projects/task-manager-api-optimusgit.git
   cd task-manager-api-optimusgit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Run the API Server

Start the development server:
```bash
npm run dev
```

Start the production server:
```bash
npm start
```

### Endpoints

#### Base URL: `http://localhost:3000`

1. **GET /tasks**
   - Fetch all tasks.
   - Query parameters:
     - `completed` (optional): Filter tasks by completion status (e.g., `true`, `false`).
     - Example: `GET /tasks?completed=true`

2. **POST /tasks**
   - Create a new task.
   - Request body:
     ```json
     {
       "name": "Task Name",
       "completed": false
     }
     ```

3. **GET /tasks/:id**
   - Fetch a specific task by ID.

4. **PATCH /tasks/:id**
   - Update a task's details.
   - Request body (partial update allowed):
     ```json
     {
       "name": "Updated Task Name",
       "completed": true
     }
     ```

5. **DELETE /tasks/:id**
   - Delete a task by ID.

---

## Testing

Run the test suite to ensure all functionalities are working:
```bash
npm run test
```

---

## Deployment

The API can be deployed to platforms like Render or Railway. Ensure the `PORT` environment variable is set for the production server.

---

## Project Structure

```
project-root/
├── src/
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   │   ├── validateTask.js
│   │   └── errorHandler.js
│   └── app.js
├── package.json
├── .gitignore
└── README.md
```



