const express = require("express");

const bodyParser = require("body-parser");
const db = require("./my-app/database/db");
const { Users, save, Low ,Lower} = require("./my-app/database/db");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
// const config = require('./my-app/database/db');

//  .then(
//   () => {console.log('Database is connected') },
//   err => { console.log('Can not connect to the database'+ err)}
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.get('*', (req,res) =>{
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });




app.get("/a", (req, res) => {
  // console.log("motasem raggad");
  const motasem = [{ raggad: "motasem" }];

  res.json(motasem);
});

app.post("/tgo", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username });
  res.send("raggad");
});

app.get("/signIn", function(req, res) {
  var shopname = req.body.shopname;
  // console.log(shopname);
});

app.post("/reg-Shop", function(req, res) {
  var username = req.body.username;
  var  password= req.body.password;
  var id = req.body.id;
  var phoneNumber = req.body.phoneNumber;

  Low.create({
    username: username,
    password: password,
    id: id,
    phoneNumber: phoneNumber
  }).then((userrrr)=>{
    // console.log(userrrr)
 res.send(userrrr)
  })
  
});
app.post("/lowInf", function(req, res) {
  var name = req.body.name;
  var  phoneNumber= req.body.phoneNumber;
  var location = req.body.location;
  var graduateYear = req.body.graduateYear;
  var graduatUN = req.body.graduatUN;


  Lower.create({
    name: name,
    phoneNumber: phoneNumber,
    location: location,
    graduateYear: graduateYear,
    graduatUN: graduatUN

  }).then((lower)=>{
    // console.log(userrrr)
 res.send(lower)
  })
  
});
app.post("/case", function(req, res) {
  const cases = req.body.cases;
 


  Cases.create({
    case: cases,
   

  }).then((Cases)=>{
    // console.log(userrrr)
 res.send(Cases)
  })
  
});


app.get("/raggad" , (req,res)=>{
  var name = req.body.name;
  Lower.find({}).then( function (Lower) {
    return res.send(Lower)
  }).catch(function(err){
    return res.send({error: 'Server Error'});
})
})



  
app.post("/users",(req, res)=>{
  
  var username = req.body.username;
  var password = req.body.password;
  
  Low.findOne({ username }, function(err, user) {
    if (err) {
      // console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
        error: 'Incorrect username or password'
      });
    } else {
      // console.log(user)
      res.sendStatus(200);
    }
  });
});
  
  

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});

