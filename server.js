const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const db = require('./my-app/database/db');
const app = express();
const PORT = process.env.PORT || 5000;

// const config = require('./my-app/database/db');

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}) 
//  .then(
//   () => {console.log('Database is connected') },
//   err => { console.log('Can not connect to the database'+ err)}
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("motasem raggad");
  const motasem = [{ raggad: "motasem" }];

  res.json(motasem);
});

app.post("/signUp", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  User.create({ username: username, password: password }).then(() => {
    res.send({ done: "successful" });
  });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});

// const express = require ("express");
// // const bodyParser = require('body-parser');
//  const app = express();
//  const port = 5000;
// //  app.use(express.static(__dirname + '/../react-client/dist'));

//  app.get("/", (req,res) => {
//      console.log("motasem raggad")
//      const motasem = [
//          {raggad :"motasem"}
//      ];

//      res.json(motasem);
// });
// app.post('/signUp', function(req, res) {
//     const username = req.body.username;
//     const password = req.body.password;
//     //Check if user exists in the database
//     // User.findOne({where: {username: username}}).then(function(user){
//     res.send("recust")

//     });

// });

// app.listen(port, () => console.log("raggad"));
