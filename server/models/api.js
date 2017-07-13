const express = require('express')
const router = express.Router()
//const nodemailer = require('nodemailer')
//const passport = require('passport')
//const LocalStrategy = require('passport-local').Strategy
//const jwt = require('jsonwebtoken')
//let crypto = require('crypto')
console.log('api')

router.post('/editinfo', (req,res) => {
	//res.render('details')
	res.json({success: true, msg:'reached editinfo'})
	console.log('reached editinfo')
})

router.post('/adduser', (req,res) => {
	res.render('details')
	res.json({success: true, msg:'reached edituser'})
})

router.post('/register', (req,res) => {
	res.render('details')
	res.json({success: true, msg:'reached register'})
})

router.post('/login', (req,res) => {
	res.render('details')
	res.json({success: true, msg:'reached login'})
})

router.post('/profile', (req,res) => {
	res.render('details')
	res.json({success: true, msg:'reached profile'})
})

module.exports = router;
