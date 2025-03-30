const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser');

app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
  console.log(req.cookies);
  res.send('Working fine');
});

app.get('/set-cookie', (req, res) => {
  res.cookie("mode", "dark");
  res.send("Cookie set successfully!");
})

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});