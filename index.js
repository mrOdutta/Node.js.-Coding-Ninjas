// Declaring the port
const port = 8000;

// Importing required modules
const express = require('express');
const app = express();
const router = require('./routes');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs'); // Importing the EJS module

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for using EJS layouts
app.use(expressLayouts);

// Middleware for extracting styles and scripts from EJS layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Accessing the router
app.use('/', router);

// Set up the EJS view engine
app.set('view engine', 'ejs'); // Use 'ejs' as the view engine
app.set('views', './views');

// Listening to the port
app.listen(port, () => {
  console.log("Successfully connected to the server: " + port);
});
