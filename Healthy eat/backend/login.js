const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const DATA_FILE = path.join(__dirname, "users.json");

function readUsers() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data || "[]");
}

function writeUsers(users) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  let users = readUsers();

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const newUser = { name, email, password };
  users.push(newUser);
  writeUsers(users);

  res.json({ message: "Signup successful", user: { name, email } });
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json({ message: "Login successful", user: { name: user.name, email: user.email } });
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});


