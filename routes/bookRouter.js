var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController');

router
	.route('/all')
			.get(bookController.getAllBooks)

router
	.route('/add')
			.put(bookController.addBook)

router
	.route('/delete')
		.put(bookController.deleteBook)
		
		
module.exports = router;