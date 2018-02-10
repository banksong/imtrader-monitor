function StringBuffer(){ 
	this.content = new Array; 
	} 
	StringBuffer.prototype.append = function( str ){ 
	this.content.push( str ); 
	} 
	StringBuffer.prototype.toString = function(){ 
	return this.content.join(""); 
} 
var express = require('express');
var router = express.Router();
var Config = require('../config/config');
var fs = require('fs');
var conf = new Config();
var logPath = conf.metaTraderLog;

/* GET about page. */
router.get('/', function(req, res, next) {
	var search = req.query.search;
	var results = [];
	console.log(search);

		
	res.render('metaTraderLog', {
	        title: 'USDIND AND DOW JONES:'
   		 });
   
});

module.exports = router;
