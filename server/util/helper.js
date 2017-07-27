// Utility functions

const mongoose = require('mongoose')
const assert = require('assert')
const userCollection = require('./../models/schema.js').patientcollection;

//console.log(userCollection.patientcollection)


module.exports.addUser = function addUser(data,callback) {
    userCollection.patientcollection.create(data, (err, result) => {
/*    	console.log('Error' + err)
    	console.log('result' + result)
*/
    	if (err){
	  		return callback(err,null);
	    } else {
	        return callback(null,result);
        }
    })
}


module.exports.createUsername = function createUsername(data, callback) {

	//console.log('\nuserCollection\n\n' + userCollection)
	//console.log('\n\nuserCollection.patient = ' + userCollection)

	console.log('\ndata ' + data)
	var query = {patient_id : {$gte: 21, $lte: 25} };

	userCollection.find(query,  (err, result) => {
		if(err){
			return callback(err,null)
		}
		else {
			console.log('\n\nresult ' + result)
			return callback(null,result)
		}
	})
}