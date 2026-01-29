# Simple Login Application (React + Node.js)

A simple full-stack login application built using **React (Vite)** for the frontend and **Node.js (Express)** for the backend.  
This project demonstrates clean code structure, form validation, API integration, and best practices.

---

## Features

### Frontend

- React with Vite
- Login form with Email and Password
- Mandatory field indication (*)
- Email format validation
- Success and error messages
- Clean and modular folder structure

### Backend

- Node.js with Express
- Login API (`POST /api/login`)
- Input validation
- Hardcoded user authentication
- No database required

---


## Test Credentials

Email: admin@gmail.com

Password: Admin@123


---

## Run an application 


### Clone the Repository
git clone https://github.com/Sneha-c-c/Login_application.git

cd Login_application

### Run the Backend (Node.js)

---

cd server
npm install
npm run dev

---

Backend will run on:

http://localhost:5000


### Health check:

http://localhost:5000/health


### Run the Frontend (React)

Open a new terminal window:

cd client
npm install
npm run dev


Frontend will run on:

http://localhost:5173

---

## API Details


### Login API

#### Endpoint

POST /api/login


#### Request Body

{
  "email": "test@example.com",
  "password": "Password@123"
}


#### Success Response

{
  "success": true,
  "message": "Login successful"
}


#### Error Response

{
  "success": false,
  "message": "Invalid email or password"
}
