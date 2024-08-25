const express = require("express");

const app = express();
const apiRouter = express.Router();

// Define routes for the /api base path
apiRouter.get("/", (req, res) => {
    res.json({ message: "Congrats! You've deployed Express to Vercel" });
});

// Use the router with the /api base path
app.use("/api", apiRouter);

// Export the app for Vercel
module.exports = app;
