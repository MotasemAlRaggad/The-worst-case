const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected! ^-^");
});
let userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});
// let Repo = mongoose.model('Repo', User);

module.exports.User = mongoose.model('User', userSchema);