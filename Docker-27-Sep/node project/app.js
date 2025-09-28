const express = require('express');

const app = express();

// /hello - http://locahost:3000/hello
app.get('/hello', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <p>Try sending a request to /error and see what happens</p>
    
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
