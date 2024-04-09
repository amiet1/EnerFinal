
const express = require('express');
const path = require('path'); // used to make absolute path to static folder
const database = require('./database');

// __dirname is the absolute path to the directory containing this file
// path.join() will construct an absolute path using the path components provided
const pathToDistFolder = path.join(__dirname, '..', 'vite-project', 'dist');

const app = express();


// This middleware controller is created by invoking `express.static(filepath)`
// Sends the static assets (HTML, CSS, and JS) in the frontend dist folder to the client for ALL requests
const serveStatic = express.static(pathToDistFolder);


app.use(serveStatic);

app.get('/checkDBConnection', async (req, res) => {
    try {
      const result = await database.query('SELECT * FROM users;');
      res.json(result.rows);
    } catch (sqlError) {
      const errorMessage = new Error('Database not connected');
      console.error({errorMessage, sqlError});
      res.json({errorMessage, sqlError});
    }
  }) //* gets everything from user table if it works

const port = 8080;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});
