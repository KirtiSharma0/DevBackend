const mongoose = require('mongoose')

//creating user schema
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required : true, //va.id data mandatory field
        minlength:2,
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required : true,
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender data not valid")
            }
        }
    },
    photoUrl : {
        type : String,
    },
    description : {
        type : String,
    },
    about : {
        type : String,
        default:"This is a default intro of user",
    },
    skills : {
        type : String, //array of strings
    }
},
{
     timestamps : true  //to store date and time of user registration
}
);

//now we create mongoose model
module.exports  = mongoose.model("User" , userSchema)
  

 