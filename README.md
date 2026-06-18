# SS Auth App

A full-stack authentication application built with **React** (frontend) and **Express + MongoDB** (backend). Features JWT-based registration, login, and protected routes.

## Features

- 🔐 **JWT Authentication** — Secure token-based auth with bcrypt password hashing
- 📝 **User Registration** — Create an account with name, email, and password
- 🔑 **User Login** — Sign in with email and password
- 👤 **Profile Dashboard** — View your profile information after logging in
- 🛡️ **Protected Routes** — Dashboard is only accessible to authenticated users
- 🎨 **Modern UI** — Clean, responsive design with React Router

## Tech Stack

| Layer    | Technology                                             |
| -------- | ------------------------------------------------------ |
| Frontend | React 19, React Router 7, Axios, Vite                  |
| Backend  | Node.js, Express 5, Mongoose, JWT, bcryptjs            |
| Database | MongoDB (local or Atlas)                               |

## Project Structure

```
auth/
├── client/                  # React frontend
│   ├── src/
│   │   ├── App.jsx          # App entry with routing
│   │   ├── AuthContext.jsx  # Auth state management
│   │   ├── Login.jsx        # Login page
│   │   ├── Register.jsx     # Registration page
│   │   ├── Dashboard.jsx    # Protected dashboard
│   │   ├── index.css        # Styles
│   │   └── main.jsx         # React DOM entry
│   ├── index.html
│   ├── vite.config.js       # Vite config with API proxy
│   └── package.json
├── server/                  # Express backend
│   ├── config/
│   │   └── db.js            # MongoDB connection
│   ├── controllers/
│   │   └── authController.js # Auth logic (register, login, getMe)
│   ├── middleware/
│   │   └── authMiddleware.js # JWT verification middleware
│   ├── models/
│   │   └── User.js          # User model with bcrypt hashing
│   ├── routes/
│   │   └── authRoutes.js    # Auth API routes
│   ├── app.js               # Express app setup
│   ├── server.js            # Server entry point
│   ├── .env.example         # Environment variables template
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB](https://www.mongodb.com/) — local instance or [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier)
- [npm](https://www.npmjs.com/) (included with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/tejass-06/SS-AUTHAPP.git
cd SS-AUTHAPP
```

### 2. Configure environment variables

Copy the example env file and fill in your values:

```bash
cp server/.env.example server/.env
```

Edit `server/.env` and set the following:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=30d
```

> **Getting a MongoDB connection string:**
> - **Local:** `mongodb://localhost:27017/auth`
> - **Atlas:** Create a free cluster, go to Connect → Drivers, and copy the connection string (replace `<password>` with your database user password)

> **JWT_SECRET:** Use a long, random string. You can generate one with:
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> ```

### 3. Install dependencies

Open **two terminal windows** — one for the server, one for the client.

**Terminal 1 — Server:**

```bash
cd server
npm install
```

**Terminal 2 — Client:**

```bash
cd client
npm install
```

### 4. Start the application

**Terminal 1 — Start the server:**

```bash
cd server
npm run dev
```

The server will start on `http://localhost:3000`.

**Terminal 2 — Start the client:**

```bash
cd client
npm run dev
```

The client will start on `http://localhost:5173` and automatically proxy API requests to the server.

### 5. Open the app

Visit **[http://localhost:5173](http://localhost:5173)** in your browser.

- Click **"Create one"** to register a new account
- After registering, you'll be redirected to the dashboard
- Use **"Sign In"** to log in with existing credentials

## API Endpoints

| Method | Endpoint          | Auth Required | Description              |
| ------ | ----------------- | ------------- | ------------------------ |
| POST   | `/api/auth/register` | No          | Register a new user      |
| POST   | `/api/auth/login`    | No          | Login with credentials   |
| GET    | `/api/auth/me`       | Yes         | Get current user profile |
| GET    | `/`                  | No          | Health check             |

### Request / Response Examples

**Register:**

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"secret123"}'
```

```json
{
  "_id": "65a1b2c3d4e5f6...",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Login:**

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"secret123"}'
```

**Get Profile (Protected):**

```bash
curl http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Available Scripts

### Server (`server/`)

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `npm run dev`    | Start server with auto-reload    |
| `npm start`      | Start server in production mode  |

### Client (`client/`)

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start Vite dev server         |
| `npm run build`   | Build for production          |
| `npm run preview` | Preview production build      |

## Environment Variables

| Variable        | Required | Default | Description                            |
| --------------- | -------- | ------- | -------------------------------------- |
| `PORT`          | No       | `5000`  | Server port                            |
| `MONGO_URI`     | Yes      | —       | MongoDB connection string              |
| `JWT_SECRET`    | Yes      | —       | Secret key for signing JWT tokens      |
| `JWT_EXPIRES_IN`| No       | `30d`   | JWT token expiry duration              |

## License

ISC
