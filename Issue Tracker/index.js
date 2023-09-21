// Declearing the port 
const port = 8000
// defining the express server
const express = require('express');
const app = express();
// Defining the router 
const router = require('./routes');
//defining the ejs Stuctures
const expressLayouts = require('express-ejs-layouts');
//parsing with the express
app.use(express.urlencoded({extends : true}))
// json of express
app.use(express.json());
app.use(expressLayouts);

// parsing the css and javascript from the sub pages into the ejs layouts
app.set('layout extractStyles', true);
app.set('layout extractScript', true);

// Accsing the router
app.use('./', router);

// set up the ejs engine
app.set('view engine', ejs);
app.set('views', './views');

// listing to the port 
app.listen(port, ()=>{console.log("Sucessfully connected to- the server:" + port)});

