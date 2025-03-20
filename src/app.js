 //create server by importing express into out app
 const express = require('express');

 //creating new app by calling express func
 const app = express();

//only handle Get call api to user
app.get("/user" , (req,res)=>{
    res.send({firstname:"Kirti" , lastname:"Sharma"})
})

//only handle Post call api to user
app.post("/user",(req,res)=>{ 
    res.send("Data saved to database successfully");
})

//only handle delete calls
app.delete("/user",(req,res)=>{
    res.send("Account deleted")
})
 //request handler : all http api calls
app.use("/test" , (req,res)=>{
    res.send("hello from server")
})

// app.use("/" , (req,res)=>{
//     res.send("this is wihtout slash route")
// })

// app.use("/hello" , (req,res)=>{
//     res.send("running at localhost 3000/help")
// })

 app.listen(3000 , ()=>{
    console.log("Server has been started successfully")
 });
