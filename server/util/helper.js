// Utility functions

const mongoose = require('mongoose')
const assert = require('assert')
const userCollection = require('./../models/schema.js');

console.log(userCollection)

module.exports.addUser = function addUser(data,callback) {
    userCollection.helper.create(data, (err, result) => {
    	console.log('Error' + err)
    	console.log('result' + result)

    	if (err){
	  		return callback(err,null);
	    } else {
	        return callback(null,result);
        }
    })
}