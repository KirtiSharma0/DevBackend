const adminAuth = (req,res,next) =>{
    const token = "abc";
    const isAuthorized = "abc";
    if(!isAuthorized){
        res.status(401).send("unauthorized data");
    }
    else next();
};
const userAuth = (req,res,next) =>{
    const token = "pqr";
    const isAuthorized = "pqr";
    if(!isAuthorized){
        res.status(401).send("unauthorized data");
    }
    else next();
};

module.exports = {
    adminAuth,
    userAuth,
};