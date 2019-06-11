const express = require ("express");
const bodyParser = require('body-parser'); 
 const app = express();
 
 app.use(express.static(__dirname + '/../react-client/dist'));

 app.get("/", (req,res) => {
     console.log("motasem raggad")
     const motasem = [
         {raggad :"motasem"}
     ];
     res.json(motasem);
}); 
app.post("/signUp", (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
res.send("hi")
});
const port = 5000;

app.listen(port, () => console.log("raggad"));