// server/indez.js

//import express
const express = require("express");
// set port to env default or 3001
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => { res.json({ 
  message: "Hello from server!" });
});

app.listen(PORT, () => {
	console.log('listening on port ' + PORT);
});





