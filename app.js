const express = require("express")
const app = express();
const port = 3000;
const connectDB = require("./config/db.js");
const libraryRoutes = require("./routes/libraryroutes.js"); // Ensure this path matches your directory structure
const logger = require("./middlewear/logger.js")
const authHandler = require("./middlewear/authHandler");
connectDB();



app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(logger);
app.use(authHandler)
app.use("/",libraryRoutes);


app.listen(3000,()=>{
    console.log(`server is running on ${port}`);
    
})