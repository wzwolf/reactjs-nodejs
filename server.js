const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
