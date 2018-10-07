var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router
	.route('/register')
			.put(userController.createUser)

router
	.route('/authenticate')
			.put(userController.authenticateUser)


module.exports = router;