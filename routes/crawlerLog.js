var express = require('express');
var router = express.Router();
var Config = require('../config/config');
var fs = require('fs');
var conf = new Config();
var logPath = conf.crawlerLog;

/* GET about page. */
router.get('/', function(req, res, next) {
	var search = req.query.search;
	var results = [];
	console.log(search);
	if (search === undefined || search === '') {
			var logContent =  fs.readFileSync(logPath,'utf-8');
			var lines = logContent.trim().split('\n');
	 		res.render('crawlerLog', {
	        title: 'This is crawlerLog last page',
	        logPath: logPath,
	        logContent: lines
   		 });
	} else {
		fs.readFileSync(logPath,'utf-8').toString().split('\n').forEach(function (line) { 
   			 if ((line.toString()).indexOf(search) > -1) {
				console.log('it matched');
   			 	results.push(line.toString());
   			 }
   			 
		});
		// var logContent =  fs.readFileSync(logPath,'utf-8');
		// for ( var i = logContent.length; i > 0; i ++)
		
		res.render('crawlerLog', {
	        title: 'USDIND AND DOW JONES',
	        logPath: logPath,
	        logContent: results
   		 });

	}
   
});

module.exports = router;