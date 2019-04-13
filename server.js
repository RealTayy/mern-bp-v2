/***************|
|* DEPENDECIES *|
|***************/
/* GENERAL */
// Utilities for working with file and directory paths
const path = require('path');
// Load enviroment variables from .env into process.env
require('dotenv').config()

/* WEB FRAMEWORKS */
// lightweight web framework for node server
const express = require('express');
// Initialize express under app variable
const app = express();
const PORT = process.env.PORT || 3001;

/* BODY PARSERS */
// node.js body parsing middleware avaiable under req.body
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

/* LOGGERS */
/* morgan set to 'dev':
	RED         Server Error Codes
	YELLOW      Client Error Codes
	CYAN        Redirection Codes
  UNCOLORED   Other Codes         */
if (process.env.NODE_ENV !== 'production') {
  const logger = require('morgan');
  app.use(logger('dev'));
}

/*****************|
|* SET UP ROUTES *| 
|*****************/
// Setup app to serve static files from React App depending on dev/prod
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client', 'build')));
}
// app.use(express.static(path.join(__dirname, './client')));

// imports in ./routes/index.js (contains API and VIEW routes);
const routes = require("./routes");
// Sets express to use routes
app.use(routes);

/*********************************|
|* LISTEN FOR CONNECTION ON PORT *| 
|*********************************/
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });
