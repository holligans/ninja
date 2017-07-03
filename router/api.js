const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');

// Get a list of ninja from the db
router.get('/ninjas' , function(req,res,next){
	res.send({type:'GET'});
});

// Add a new ninja to the db
router.post('/ninjas' , function(req,res,next){
	Ninja.create(req.body).then(function(ninja){ //we save a new Ninja instance and wait with the promise 
		res.send(ninja); 
	}).catch(next);
});

// Update a ninja in the db
router.put('/ninjas/:id' , function(req,res,next){ ///ninja/:id because id is a parameter
	Ninja.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
		Ninja.findOne({_id:req.params.id}).then(function(ninja){
			res.send(ninja);
		});
	}).catch(next);
 	
});

// Delete a ninja from the db
router.delete('/ninjas/:id' , function(req,res,next){
 	Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
 		res.send(ninja);
 	})
});

// exporting router so it can be use at index.js 
module.exports = router;