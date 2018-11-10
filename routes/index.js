var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Direct redirect
router.get('/direct', function(req, res, next) {
  res.redirect('http://iitdtraffic.cse.iitd.ac.in/getentryvehicle?transid=1');
});

// Editted
router.get('/xxx', function(req, res, next) {
	request('http://iitdtraffic.cse.iitd.ac.in/getentryvehicle?transid=1', function(err, resp, body) {
		if(!err && resp.statusCode == 200) {
			var myJSON = JSON.parse(body);
			// console.log(myJSON);
			var newJSON = []
			for (var i = 0 ; i < myJSON.length ; i++) {
				newJSON.push(myJSON[i]['licenseno']);
			}
			res.send({ 'success' : 1, 'data' : newJSON });
		}
	})
});

module.exports = router;
