const express = require("express");
const app = express();

// Middleware to handle JSON responses
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
    res.json({ message: "Congrats! You've deployed Express" });
});

// Export the app for deployment
module.exports = app;
