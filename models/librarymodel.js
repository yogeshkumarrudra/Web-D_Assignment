const mongoose = require("mongoose")

const librarySchema = new mongoose.Schema({
    bookname:String,
    author:String,
    category:String,
    price:Number,
    quantity:Number
})


module.exports = mongoose.model("librarymodel",librarySchema)
