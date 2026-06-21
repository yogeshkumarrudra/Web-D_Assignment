const express = require("express");
const router = express.Router();
const librarycontroller = require("../controller/librarycontroller.js");

// View Dashboard Route
router.get("/", librarycontroller.home);

router.get("/getdata", librarycontroller.getallbook);

router.get("/insertdata",librarycontroller.insertbook);

router.post("/createdata", librarycontroller.createbook);

// Update Record Routes
router.get("/edit/:id", librarycontroller.editbook);
router.post("/update/:id", librarycontroller.updatebook);

// Delete Record Route
router.get("/Delete/:id", librarycontroller.deletebook);

module.exports = router;