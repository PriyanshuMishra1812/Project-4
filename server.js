
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'house rent.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-up.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Placeholder login logic
  if (username && password) {
    res.send('Login successful (dummy response)');
  } else {
    res.send('Login failed');
  }
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  // Placeholder signup logic
  if (username && email && password) {
    res.send('Signup successful (dummy response)');
  } else {
    res.send('Signup failed');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
