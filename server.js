import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Initialize Express app
const app = express();

// Middleware to allow cross-origin requests (important for Vite and Express integration)
app.use(cors());

// Middleware to parse incoming JSON request bodies
app.use(bodyParser.json());

// Sample user data (replace this with a database in a production app)
const users = [
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "user@example.com", password: "user", role: "user" },
];

// Login API endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Find user based on email and password
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  // If user found, send back user role, otherwise return an error
  if (user) {
    res.json({ role: user.role });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
