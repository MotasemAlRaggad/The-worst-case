const express = require ("express");
const bodyParser = require('body-parser'); 
 const app = express();
 const port = 5000;
 app.use(express.static(__dirname + '/../react-client/dist'));

 app.get("/", (req,res) => {
     console.log("motasem raggad")
     const motasem = [
         {raggad :"motasem"}
     ];
     res.json(motasem);
}); 
app.post('/signUp', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    //Check if user exists in the database
    User.findOne({where: {username: username}}).then(function(user){
       
      
      
    });
    
});
       
    


app.listen(port, () => console.log("raggad"));