/**
 * Created by SUCCESS\phungdinh on 4/21/15.
 */
var express = require('express');
var router = express.Router();
var Config = require('../config/config');
var fs = require('fs');
var conf = new Config();
var logPath = conf.metaTraderLog  + '\\20170815.log';

/* GET about page. */
router.get('/', function(req, res, next) {
	var search = req.query.search;
	var results = [];
	console.log(search);
	if (search === undefined || search === '') {
			var logContent =  fs.readFileSync(logPath,'utf-8');
			var lines = logContent.trim().split('\n');
	 		res.render('metaTraderLog', {
	        title: 'This is metaTraderLog last page',
	        logPath: logPath,
	        logContent: lines
   		 });
	} else {
		fs.readFileSync(logPath,'utf-8').toString().split('\n').forEach(function (line) { 
   			 if ((line.toString()).indexOf(search) > -1) {
   			 	results.push(line.toString());
   			 }
   			 
		});
		
		res.render('metaTraderLog', {
	        title: 'This is search results:',
	        logPath: logPath,
	        logContent: results
   		 });

	}
   
});

module.exports = router;
