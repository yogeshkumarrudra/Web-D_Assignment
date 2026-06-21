const mongoose = require("mongoose")

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/library");
        console.log("sucessfully connected to database");
        
    }
    catch(err){
        console.log("ERROR");
        
    }
}

module.exports = connectDB;