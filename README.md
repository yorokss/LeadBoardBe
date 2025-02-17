
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
python sessionLogger.py


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

2️⃣ Leaderboard & Scores

Method

Endpoint

Description

Auth Required?

POST

/api/score

Submit a new score

✅ Yes

GET

/api/leaderboard

Get top 10 leaderboard

❌ No

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
