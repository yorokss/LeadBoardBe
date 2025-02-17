
🎮 Game Leaderboard System

A Game Leaderboard & User Management System with authentication, score submission, and leaderboard tracking.Built with Node.js, Express.js, MongoDB, Python (microservice), and React.js.

🚀 Features

✅ User Authentication (Register/Login with JWT)✅ Submit Scores (Authenticated users only)✅ Leaderboard (Top 10 players displayed)✅ Python Microservice (Logs game sessions to MongoDB)✅ Rate Limiting (Prevents abuse of API)✅ Fully Responsive React.js Frontend

📺 Technologies Used

Backend

Node.js + Express.js

MongoDB + Mongoose

JWT Authentication

Express Rate Limiting

Python + Flask (Microservice)

Axios for API Calls

Frontend

React.js

React Router

Axios for API Calls

TailwindCSS (or CSS Modules)

⚙️ Setup & Installation

1️⃣ Clone the Repository

git clone git@github.com:yorokss/LeadBoardBe.git for backend 
cd game-leaderboard
git@github.com:yorokss/LeadBoardFe.git for frontEnd


2️⃣ Backend Setup

cd backend
npm install

Configure .env file

PORT=5000
MONGO_URI=your mongo db url
JWT_SECRET=your_jwt_secret

Run the Backend

npm start

3️⃣ Python Microservice Setup

cd microservices
pip install flask pymongo python-dotenv "dependency" 
run python sessionLogger.py


4️⃣ Frontend Setup

cd frontend
npm install
npm start

The frontend will be available at http://localhost:3000/.

📌 API Documentation

1️⃣ Authentication

Method

Endpoint

Description

Request Body

POST

/api/auth/register

Register a new user

{ "name": "John", "email": "john@example.com", "password": "Test@123" }

✅ Successful register Response

  {
    "message": "user created successfully",
    "data": {
        "name": "Agent470",
        "password": "$2b$10$mOc590UX5iy1MogcUctac.Z59xB3z2RAz/"
        "email": "hitman1@example.com",
        "_id": "67b33cc74fa756c00afdebfd",
        "createdAt": "2025-02-17T13:42:31.877Z",
        "updatedAt": "2025-02-17T13:42:31.877Z",
        "__v": 0
    }
}
Response:
Success: 200 OK with a success message and user data.
Failure: 400 Bad Request if the user already exists or something went wrong.
Failure: 500 Bad Request if "Something went wrong.
POST

/api/auth/login

Login & get JWT token

{ "email": "john@example.com", "password": "Test@123" }

✅ Successful Login Response

{
  "message": "User logged in successfully",
  "token": "JWT_TOKEN",
  "data": {
    "name": "John",
    "email": "john@example.com"
  }
}
Response:
Success: 200 OK with a success message, token, and user data (excluding password).
Failure: 400 Bad Request if the user is not found or password is invalid.
Failure: 500 Bad Request if "Something went wrong.

2️⃣ Leaderboard & Scores

Method

Endpoint

Description

Auth Required?

POST

/api/score
✅ Successful score addition Response

{
  "message": "Score submitted successfully",
  "data": {
    "_id": "scoreId12345",
    "userID": "userId12345",
    "score": 100,
    "createdAt": "2025-02-17T00:00:00.000Z",
    "updatedAt": "2025-02-17T00:00:00.000Z",
    "__v": 0
  }
} 

Response:
Success: 201 OK with a success message and user data.
Failure: 400 Bad Request if the User not found
Failure: 500 Bad Request if "Something went wrong.


GET

/api/leaderboard

Get top 10 leaderboard

Response:
Success: 201 OK with a success message and user data.
Failure: 400 Bad Request if the User not found
Failure: 500 Bad Request if "Something went wrong.
Failure: 401 Bad Request if "Please authenticate using a valid token.
✅ Submit Score Request

POST /api/score
autho-token: <JWT_TOKEN>
{
  "score": 85
}

✅ Leaderboard Response

{
  "message": "Leaderboard retrieved",
  "data": [
    { "user": { "name": "Alice" }, "score": 95 },
    { "user": { "name": "John" }, "score": 90 }
  ]
}

3️⃣ Game Session Logging (Python Microservice)

Method

Endpoint

Description

Request Body

POST

/api/log-session

Log game session (Python)

{ "user": "UserID", "score": 85 }

🐂 Database Schema (MongoDB)

User Collection

{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashed_password",
  "createdAt": "2025-02-15T10:39:16.805Z"
}

Score Collection

{
  "_id": "ObjectId",
  "userID": "ObjectId",
  "score": 85,
  "timestamp": "2025-02-15T12:18:30.400Z"
}

Game Sessions Collection (Logged by Python)

{
  "_id": "ObjectId",
  "user": "ObjectId",
  "score": 90,
  "timestamp": "2025-02-15T12:20:00.000Z"
}

🏰 Implementation Choices

1️⃣ Node.js + Express.js for handling backend logic and authentication.2️⃣ MongoDB as a NoSQL database for fast performance.3️⃣ JWT (JSON Web Token) for secure user authentication.4️⃣ Python Microservice (Flask) for logging game sessions asynchronously.5️⃣ React.js Frontend for a responsive user interface.6️⃣ Express Rate Limiting to prevent API abuse.


📚 License

This project is licensed under the MIT License.

👤 Author

Yogesh👉 GitHub: @[yourgithub](https://github.com/yorokss)
