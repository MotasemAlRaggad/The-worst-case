
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}) 



// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {

//     console.log("good job you are connected :D")
// });
//This For User Information YY
const usersSchema = new Schema({

  username: { type: String, trim: true, required: true },
  

  // email: {
  //   type: String,
  //   required: [true, 'Email Field is required'],
  //   unique: true,
  //   match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  // },

  password: { type: String, required: true },

  date: {
    type: Date,
    default: Date.now
  }
});

//This Schema for USer Information about the car
const lowSchema = new Schema({

  username: { type: String, required: true },
  password: { type: String },
  id: { type: Number },
  phoneNumber: { type: Number, required: true },

});

const caseSchema = new Schema({

  cases: { type: String, required: true },
 

});


const lowerSchema = new Schema ({
  name : {type :String , required: true },
  phoneNumber : { type : Number,required: true},
  location : { type : String ,required: true},
  graduateYear: {type:Number,required: true},
  graduatUN:{type:String,required:true},

});


const Users = mongoose.model('users', usersSchema);
const Low = mongoose.model('low', lowSchema);
const Lower = mongoose.model('lower', lowerSchema);
const Cases = mongoose.model('cases', caseSchema);

const save = (obj,cb)=>{
  var shop = new Shop(obj)
  console.log('whaaaaatt')
  shop.save((err,res)=>{
    console.log("ERR",err,"RES",res)
    cb(err,res)
  })
}
module.exports.Users = Users;
module.exports.save = save;
module.exports.Low = Low;
module.exports.Lower = Lower;
module.exports.Cases = Cases;

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