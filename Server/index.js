require('dotenv').config();

const express = require('express');
const { resolve } = require('path');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');


const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, '../Frontend/index.html'));
});

app.use('/api/users', UserController);
app.use('/api/login', LoginController);


app.listen(port, () => {
  console.log('process.env ', process.env)
  console.log(`Example app listening at http://localhost:${port}`);
});
