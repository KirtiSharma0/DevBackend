const validator = require('validator')  //validator library


const validateData = (req)=> {
//these are the items which are extraxted from the body
    const{firstName , lastName , email , password} = req.body;

    //now validate everything
    if(!firstName|| !lastName){  //if there is no first and last name
    throw new Error("Name is not valid");
    }
    // else (firstName.length<5 || firstName.length>25){
    //     throw new Error("First name should be 4 to 25 character");
    // }
    else if (!validator.isEmail(email)){
        throw new Error("Email id is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("not a strong password");
    }
}

module.exports = {
    validateData,
}