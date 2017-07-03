const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const router = require('./routers/api'); we don't need this we can include in the middleware

// set up express app
const app = express();

// connecting to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// middleware body parser
app.use(bodyParser.json());

// Initializing (we included the require with the routers files)
app.use('/api',require('./router/api')); ///api will be before any routers url ---

// Error handler middleware
app.use(function(err,req,res,next){
	res.status(422).send({error:err.message});
})

// listen for request
app.listen(process.env.port || 4000, function(){
	console.log("Listening on port 4000");
});
app.get('/loco' , function(req,res){
	res.send('<h1>Hola Mundo</h1>'+'<p> Candela 11</p>');
})