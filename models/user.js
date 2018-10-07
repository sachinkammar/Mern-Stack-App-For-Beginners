var mongoose = require('mongoose'),
uniqueValidator = require('mongoose-unique-validator'),
bcrypt = require('bcrypt-nodejs'),
constants = require('../lib/constants'),
Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var userSchema = new Schema({
	userId: {
		type: constants.STRING,
		default:null,
		required: constants.TRUE,
		unique: constants.TRUE
	},
	username: {
		type: constants.STRING,
		default:null,
		required: constants.TRUE,
		unique: constants.TRUE
	},
	password:{
		type: constants.STRING,
		required: constants.TRUE
	}
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);