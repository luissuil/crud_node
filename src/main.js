const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//Middleware 
app.use(express.json())
app.use(morgan("dev"));
//Routes
app.use('/',require('../src/routes/index'))
/*  */

//Setting 


app.listen(80,()=> console.log('Server on'));