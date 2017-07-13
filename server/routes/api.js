
const express = require('express')
const router = express.Router()
//const nodemailer = require('nodemailer')
//const passport = require('passport')
//const LocalStrategy = require('passport-local').Strategy
//const jwt = require('jsonwebtoken')
//let crypto = require('crypto')
/*
const helper = require ('./../util/helper')
const schema = require ('./../models/schema')
const user = require ('./../models/user')
*/
router.post('/editinfo', (req,res) => {
	
	console.log('reached editinfo')
	res.json({success: true, msg:'reached editinfo'})

	/*helper.addUser(req.body, (err, user) => {
		if(err){
        	res.json({success: false, msg:'Failed to register user'})
        } else {
        	res.json({success: true, msg:'User registered'})
        	console.log('registered to console')
        }
	})*/
	
})

router.post('/adduser', (req,res) => {
	res.json({success: true, msg:'reached edituser'})
})

router.post('/register', (req,res) => {
	res.json({success: true, msg:'reached register'})
})

router.post('/login', (req,res) => {
	res.json({success: true, msg:'reached login'})
})

router.post('/profile', (req,res) => {
	//res.render('details')
	res.json({success: true, msg:'reached profile'})
})

module.exports = router;
