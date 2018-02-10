var cmd=require('node-cmd');
var Promise = require('bluebird');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 	const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })
	getAsync(
	 `git pull
	 `
		).then(data => {
			res.send(data);
	}).catch(err => {
	  	res.send(err);
	});
});

module.exports = router;



