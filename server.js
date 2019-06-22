const express = require("express");
const bodyParser = require("body-parser");
const db = require("./my-app/database/db");
const {
  // Users,
  // save,
  Low,
  Lower,
  Cases,
  Display
} = require("./my-app/database/db");
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

// post method for client signup and create datasor hem in the data base
app.post("/reg-Client", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var id = req.body.id;
  var phoneNumber = req.body.phoneNumber;
 // fuonction to creact the data comming from the client side 
  Low.create({
    username: username,
    password: password,
    id: id,
    phoneNumber: phoneNumber
  }).then(userrrr => {
    // console.log(userrrr)
    res.send(userrrr);
  });
});

app.get("/cli-name", (req, res) => {
  var username = req.body.username;
  Low.find({})
    .then(function(Low) {
      return res.send(Low);
    })
    .catch(function(err) {
      return res.send({ error: "Server Error" });
    });
});
// post method for lowyer signup and create datasor hem in the data base
app.post("/reg-Low", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var id = req.body.id;
  var phoneNumber = req.body.phoneNumber;

  Display.create({
    username: username,
    password: password,
    id: id,
    phoneNumber: phoneNumber
  }).then(user2 => {
    // console.log(userrrr)
    res.send(user2);
  });
});
// add the info of the lower in list for client using 
app.post("/lowInf", function(req, res) {
  var name = req.body.name;
  var phoneNumber = req.body.phoneNumber;
  var location = req.body.location;
  var graduateYear = req.body.graduateYear;
  var graduatUN = req.body.graduatUN;

  Lower.create({
    name: name,
    phoneNumber: phoneNumber,
    location: location,
    graduateYear: graduateYear,
    graduatUN: graduatUN
  }).then(lower => {
    // console.log(userrrr)
    res.send(lower);
  });
});
// bring all the name of the lowyer from database 
app.get("/raggad", (req, res) => {
  // var name = req.body.name; 
  Lower.find({})
    .then(function(Lower) {
      return res.send(Lower);
    })
    .catch(function(err) {
      return res.send({ error: "Server Error" });
    });
});
// add the info of client and the casesof hem
app.post("/cases", function(req, res) {
  const name = req.body.name;
  const phonNumber = req.body.phonNumber;
  var lawyer = req.body.lawyer;
  const typeOfTheCase = req.body.typeOfTheCase;
  const cases = req.body.cases;
  // console.log(cases);
  Cases.create({
    name: name,
    phonNumber: phonNumber,
    lawyer: lawyer,
    typeOfTheCase: typeOfTheCase,
    cases: cases
  }).then(cases => {
    // console.log(userrrr)

    res.send(cases);
    console.log(cases);
  });
});
// bring the info of the client and the case of hem and display it for the lowyer 
app.get("/get-cases", (req, res) => {
  var lawyer = req.body.lawyer;
  Cases.find({})
    .then(function(Cases) {
      return res.send(Cases);
    })
    .catch(function(err) {
      return res.send({ error: "Server Error" });
    });
});

//sign in check for the client 
app.post("/sign-in-low", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
 // find just the user name and the password from the data base and commper it with the sign in info the user write 
  Display.findOne({ username }, function(err, user) {
// if the is any error return this error 
    if (err) {
      // console.error(err);
      res.status(500).json({
        error: "Internal error please try again"
      });
      // if the user name is ronge return this error
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect username or password"
      });
      //else match this 200 with frontend and enter the page
    } else {
      // console.log(user)
      res.sendStatus(200);
    }
  });
});
// check of the info of user { user name and password} 
app.post("/users", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
 //ckeck the info from the loe schema if exist or not  
  Low.findOne({ username }, function(err, user) {
    if (err) {
      // console.error(err);
      res.status(500).json({
        error: "Internal error please try again"
      });
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect username or password"
      });
    } else {
      // console.log(user)
      res.sendStatus(200);
    }
  });
});

//  make the app listen for the port and if the port not work find anther port not using 
app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
