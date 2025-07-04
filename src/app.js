 //create server by importing express into out app
 const express = require('express');

 //connecting db and importing connectdb from database
 const connectDB = require("./config/database")
 //put values of userobject in database attributes
 const User = require("./models/user")
 //importing validation data for password encryption
 const {validateData} = require("./utils/validation")
 //importing bcrypt package for password encryption
 const bcrypt = require("bcrypt")
 //creating new app by calling express func
 const app = express();
 app.use(express.json())  //helps to allow for accessing request body content
    

 //creating api for userSchema input database
 app.post("/signup",async(req,res) =>{
   //validating data
   validateData(req)

   //encrypted password
   app.post("/login" async {req,res} => {
     try {
        const{emailID , password} = req.body;
        const user = await User.findOne {emailID : emailID};
        if(!user){
            throw new Error("invalid credentials");
        }
     } 
     const isPasswordvalid = await bcrypt.compare(password , user.password);
     //authemtication jwt works here
     if(isPasswordvalid){
        //create jwt token

        //add jwt token to cookie and sent back to the user
        res.cookie("token" , "abcdefgh");
        res.send("login successfull");
     }
     else {
        throw new Error("invalid credentials")
     }
   })

  //creating a new instance of user model
  const data = req.body;
    const user = new User(data);

     await user.save();
     res.send("user added successfully")
 })
 connectDB()
.then(()=>{
    console.log("database connected");
})
.catch(err=>{
    console.error("database not found");
});

//update user data by patch api
app.patch("/user", async(req,res)=>{
    const userID = req.body.userID;
    const data = req.body;
    //allow certain updations
    const AllowedUpdates = [
        "photoUrl","about","description"
    ]
    try {
        const user = await User.findByIDandUpdate({_id:userID},data,{
            returnDocument:"after",
            runValidators:true,
        });
        res.send("User updated");
    }catch (err){
        res.status(400).send("User not updated")
    }
});
 

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
 
//optional expression ab?c
app.get("/ab+c" , (req,res)=>{
    res.send({firstname:"work at abc abd ac"})
})
 
//multiple route handlers
app.get("/multiple" , (req,res,next)=>{
   res.send("route1")   //if there is no response next func will work
    next();
},
(req,res)=>{
    res.send("route2")
})

  //admin
app.get("/admin/getAllData", (req,res) =>{
  //logic of checking if the request is authorized or not
   const token = "xyz";  //if we change value of token then it will run else condition
   const isAuthorized = token == "xyz";
   if(isAuthorized){
    res.send("All data sent");
   }
  else {
    res.status(401).send("Unauthorized data")
  }
})
app.get("/admin/deleteAllData", (req,res) =>{
  //logic of checking if the request is authorized or not
  //fetching data from database
  res.send("All data deleted");
})

//importing separate folder of middlerware
const {adminAuth,userAuth} = require("./middleware/auth");
app.use("/admin",adminAuth);    //and pass it like this
app.get("/user",userAuth , (req,res) =>{
    res.send("user data sent");

})


 app.listen(3000 , ()=>{
    console.log("Server has been started successfully")
 });
