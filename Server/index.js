require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');


const app = express();
const port = process.env.PORT || 3010;
app.use(cors());

app.use(express.static('static'));

app.use('/api/users', UserController);
app.use('/api/login', LoginController);


app.listen(port, () => {
  console.log('process.env ', process.env)
  console.log(`Example app listening at http://localhost:${port}`);
});




