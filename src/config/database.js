//importing by
const mongoose = require('mongoose')
const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://kirtisharma5758:<db_password>@node.rlr6sww.mongodb.net/");
};
 
connectDB()
.then(()=>{
    console.log("database connected");
})
.catch(err=>{
    console.error("database not found");
});