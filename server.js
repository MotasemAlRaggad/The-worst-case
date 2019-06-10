const express = require ("express");
 const app = express();
 
 

 app.get("/", (req,res) => {
     console.log("motasem raggad")
     const motasem = [
         {raggad :"motasem"}
     ];
     res.json(motasem);
});
;const port = 5000;

app.listen(port, () => console.log("raggad"));