//import express from "express"; //old
const express = require("express") //we use this

const port = 3000; 
const app = express();

// hghfhgfhgfhgfh

app.get("/", (req, res) => { res.send("Hello World!")
});

app.listen(port, () => {
console.log(`Server running at http://127.0.0.1:${port}/`)
});