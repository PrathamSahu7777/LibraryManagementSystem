const express = require("express");
const createAuthor = require("../controller/authorController")

const router = express.Router();

router.route("/create").post(createAuthor);


module.exports = router;