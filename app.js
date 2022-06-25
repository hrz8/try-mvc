const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const session = require('express-session');
const flash = require('express-flash');

const initRouters = require('./routers');
const passport = require('./passport');

const app = express();
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// routers
initRouters(app);

app.listen(3000);
