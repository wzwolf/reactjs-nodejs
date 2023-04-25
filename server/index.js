// server/indez.js

//import express
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});





