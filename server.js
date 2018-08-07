const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); //allows other servers to talk to our server
const session = require('express-session');

require('./db/db');
app.use(session({
  secret: 'i can keep secrets',
  resave: false,
  saveUninitialized: false
}));

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:3000', //this is Kate's server
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// Require the controller after the middleware
const authController = require('./controllers/authController');
const postsController  = require('./controllers/postsController');
const firesController  = require('./controllers/firesController');

app.use('/auth', authController);
app.use('/posts', postsController);
app.use('/fires', postsController);

app.listen(9000, () => {
    console.log("10 - 4 on port 9000!");
});