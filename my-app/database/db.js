const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected! ^-^");
});
const User = mongoose.Schema({
  username: {
    type: String
  },
 password: {
      type: String
  }
},{
    collection: 'users'
});
// let Repo = mongoose.model('Repo', User);

module.exports = mongoose.model('User', User);