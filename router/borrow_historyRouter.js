const express = require("express");
const {createBorrowHistory, getOverDueBooks} = require("../controller/borrow_hisoryController")

const router = express.Router();

router.route("/create").post(createBorrowHistory);
router.route("/getOverdueBooks/:member_id").get(getOverDueBooks);


module.exports = router;