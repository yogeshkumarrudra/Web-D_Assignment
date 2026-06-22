const librarymodel = require("../models/librarymodel.js");

const librarycontroller = {


    home:(req,res)=>{
        res.render("home")
    },

    getallbook: async(req,res)=>{
        let allbook = await librarymodel.find();
        console.log(allbook);
        res.render("library",{allbook})
            
    },

    insertbook: (req, res) => {
    res.render("form");
    },





    // createbook: async (req, res) => {
    // try {
    //     // 1. Destructure the data coming from form.ejs
    //     const { bookname, author, category, price, quantity } = req.body;

    //     // 2. Map and create the new document in MongoDB
    //     await librarymodel.create({
    //             bookname: bookname,
    //             author: author,   // Maps 'auther' from the HTML form to 'author' in your schema
    //             category: category,
    //             price: price,
    //             quantity: quantity
    //             });

    //             // 3. Success! Redirect back to the main dashboard
    //             res.redirect("/");

    //     } 
    //         catch (err) {
    //             console.error("Database Insert Error:", err);
    //             res.status(500).send("Error saving record to the database");
    //         }
    //     },


    createbook: async(req,res)=>{
        req.body.ip = req.ip;
        await librarymodel.create(req.body);
        res.redirect("/getdata");
    },




        // 4. Render edit form
        // showEditForm: async (req, res) => {
        //     try {
        //         let data = await librarymodel.findById(req.params.userid);
        //         res.render("edit", { data });
        //     } catch (err) {
        //         res.status(500).send("Record not found");
        //     }
        // },


    editbook: async (req, res) => {
    const data = await librarymodel.findById(req.params.id);
    res.render("edit", { data });
    },


        // 5. Update entry
    updatebook: async (req, res) => {
        await librarymodel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.redirect("/getdata");
    },


    deletebook: async (req, res) => {
    await librarymodel.findByIdAndDelete(req.params.id);
    res.redirect("/getdata");
    },

            

};
module.exports = librarycontroller;

