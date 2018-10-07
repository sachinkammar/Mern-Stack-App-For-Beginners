var mongoose = require('mongoose'),
uniqueValidator = require('mongoose-unique-validator'),
bcrypt = require('bcrypt-nodejs'),
constants = require('../lib/constants'),
Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var bookSchema = new Schema({
	title: {
		type: constants.STRING,
		default:null,
		required: constants.TRUE
	},
	author:{
		type: constants.STRING,
		required: constants.TRUE
	},
	status:{
		type: constants.STRING
	},
	description:{
		type: constants.STRING
	}
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})

bookSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Book', bookSchema);