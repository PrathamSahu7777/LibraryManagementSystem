const express = require("express");
const {insertBooks, getAllBooks, getBookByAuthId, getBookByAuthName, totalBooksByGenre, search} = require("../controller/bookController")
const router = express.Router();

router.route("/insert").post(insertBooks);
router.route("/get").get(getAllBooks)
router.route("/findBookByAuthId/:author_id").get(getBookByAuthId)
router.route("/findBookByAuthName/:author_name").get(getBookByAuthName)
router.route("/totalBookByGenre/:genre_type").get(totalBooksByGenre)
router.route("/search").get(search)




module.exports = router;