//create server by importing express into out app
 const express = require('express');

 //creating new app by calling express func
 const app = express();


 app.listen(3000 , ()=>{
    console.log("Server2 has been started successfully")
 });
