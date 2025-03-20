 //create server by importing express into out app
 const express = require('express');

 //creating new app by calling express func
 const app = express();

 //request handler
app.use("/test" , (req,res)=>{
    res.send("hello from server")
})

app.use("/" , (req,res)=>{
    res.send("this is wihtout slash route")
})

app.use("/hello" , (req,res)=>{
    res.send("running at localhost 3000/help")
})

 app.listen(3000 , ()=>{
    console.log("Server has been started successfully")
 });
