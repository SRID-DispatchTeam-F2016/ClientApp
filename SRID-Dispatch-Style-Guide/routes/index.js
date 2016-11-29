var express = require('express');
var router = express.Router();

router.get('/heartbeat', function(req, res) {
	res.json({
		url: default_url
	});
});

module.exports = router;
