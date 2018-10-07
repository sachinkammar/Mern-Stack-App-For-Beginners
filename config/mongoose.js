//Mongoose Config
const mongoose = require('mongoose'),
constants = require('../lib/constants');
//mongoose.Promise = require('bluebird');

//mongoose.plugin(require('../middlewares/lastModified'));

mongoose.connect('mongodb://'+'localhost'+':'+'27017'+'/'+'mern-stack',{
  poolSize: constants.FIVE,
  socketTimeoutMS: constants.ZERO,
  keepAlive: constants.TRUE,
  reconnectTries: constants.THIRTY,
  //user:process.env.DB_USER,
  //pass:process.env.DB_PASS,
}, function(err){
  if(err) console.log(err);
  mongoose.Promise = global.Promise;
  console.log('DB Connection Established');
})

module.exports = mongoose.connection;