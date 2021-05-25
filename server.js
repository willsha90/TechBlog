const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const session = require('express-session');

// constants
const PORT = process.env.port || 3000;
const SESSION_SECRET = 'uewhg#*&*&(G!iewsfiuewhgfjksdh';

// create an ExpressJS instance
const app = express();

app.use(express.urlencoded({extended: true}));

// set handlebars as the view engine
app.engine('handlebars', expressHandlebars());
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'handlebars');

// add http sessions
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// add a page counter
//app.use(require('./src/Middleware/visit-counter'));

// add application routes
app.use(require('./src/Routes'));

// add static content resolver
app.use(express.static(path.join(__dirname,'public')));

// finally startup the ExpressJS app instance on the correct port
app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`);
});