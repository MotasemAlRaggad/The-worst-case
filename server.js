const express = require("express");

const bodyParser = require("body-parser");
const db = require('./my-app/database/db');
const { users ,save } = require("./my-app/database/db");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors")
// const config = require('./my-app/database/db');


//  .then(
//   () => {console.log('Database is connected') },
//   err => { console.log('Can not connect to the database'+ err)}
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.get("/a", (req, res) => {
  console.log("motasem raggad");
  const motasem = [{ raggad: "motasem" }];

  res.json(motasem);
  
});

app.post("/tgo", (req, res) => {
  

    const username = req.body.username;
    const password = req.body.password;
    //Check if user exists in the database
    User.findOne({username: username})
        res.send("raggad")
      
    
    });

    app.get('/singIn',  function(req, res) {
      
      shop.findOne({}).then(function(shops){
          return res.send({shops: shops});
      }).catch(function(err){
        res.send(dhshsh)
      })
  });
    // app.get('/', function(req, res) {
    //   // const user = req.body.user; //Added by authenticate function 
    //   shop.find({}).then((shops) => {
    //       return res.send( shops)
    //       .catch(function(err){
    //         return res.send({error: 'Server Error'});
    //     })
      
    //   });
    //     });

        app.post('/signInClient', function(req, res) {
          console.log(req.body);
         
          const shopname = req.body.shopname;
          const shoplocation = req.body.shoplocation;
          const workkinghour = req.body.workkinghour;
          const phoneNumber = req.body.phoneNumber;
         console.log("PHHHHHONE",phoneNumber)
          save({shopname: shopname, shoplocation: shoplocation, workkinghour: workkinghour, phoneNumber: phoneNumber},(err,ress)=>{
            res.send(ress)
          })
         
      });


        // app.post('/', (req, res) => {

         
        //   const shopname = req.body.shopname;
        //   const shoplocation = req.body.shoplocation;
        //   const workkinghour = req.body.workkinghour;
        //   // const specialties = req.body.specialties;
        //   const phoneNumber = req.body.phoneNumber;
        
        //   shop.findOne({ phoneNumber: phoneNumber }).then((data) => {
        //     if (data) {
        //       console.log("already registered")
        //       return res.send("phoneNumber is already taken!, Please sign up using another phoneNumber.")
        //     } else {
        //       shop.create({
        //         shopname: shopname,
        //         shoplocation: shoplocation,
        //         workkinghour: workkinghour,
                
        //         phoneNumber: phoneNumber
        //       })
        //         .then((ress) => {
        //           console.log(ress)
        //           return res.send({ done: "Signed up successfully" })
        //         })
        //     }
        //   })
        // });

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
