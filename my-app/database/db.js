
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// mongoose.connect('mongodb://localhost/myNewData', { useNewUrlParser: true ,createIndexes : true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {

//     console.log("good job you are connected :D")
// });
//This For User Information YY
const usersSchema = new Schema({

  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },

  email: {
    type: String,
    required: [true, 'Email Field is required'],
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },

  password: { type: String, required: true },

  date: {
    type: Date,
    default: Date.now
  }
});

//This Schema for USer Information about the car
const shop = new Schema({

  shopname: { type: String, required: true },
  shoplocation: { type: String },
  workkinghour: { type: Number },

  specialties: { type: String },
  phoneNumber: { type: Number, required: true },

});

// const test = new usersSchema({firstName : "yazan" ,lastName : "Najjar" , email : "YAZANANANANAN" , phoneNumber: 123123 , password : "ASSAD" })


const users = mongoose.model('users', usersSchema);
const shops = mongoose.model('shops', shop);

module.exports.users = users;
module.exports.shop = shops;


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("We're connected! ^-^");
// });
// let userSchema = new Schema({
//   username: {type: String, required: true, unique: true},
//   password: {type: String, required: true},
// });
// // let Repo = mongoose.model('Repo', User);

// module.exports.User = mongoose.model('User', userSchema);