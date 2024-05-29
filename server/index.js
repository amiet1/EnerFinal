const {
  getAllUsers,
  getById,
  createUser,
  updateUserById,
  deleteUser,
  addItem,
  removeItem
} = require("./controllers/userController");

const express = require("express");
const path = require("path"); // used to make absolute path to static folder
// const database = require("./database");
const userRouter = require('./Routes/userRoutes')

const cors = require('cors')



// __dirname is the absolute path to the directory containing this file
// path.join() will construct an absolute path using the path components provided
const pathToDistFolder = path.join(__dirname, "..", "vite-project", "dist");

const app = express();

app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json())
app.use(userRouter)

// This middleware controller is created by invoking `express.static(filepath)`
// Sends the static assets (HTML, CSS, and JS) in the frontend dist folder to the client for ALL requests
const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);


const port = 8080;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});
