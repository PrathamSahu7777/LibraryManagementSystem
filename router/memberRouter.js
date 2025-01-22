const express = require("express");
const {createMember, getMembers} = require("../controller/memberController")

const router = express.Router();

router.route("/create").post(createMember);
router.route("/getMembers").get(getMembers);

module.exports = router;
