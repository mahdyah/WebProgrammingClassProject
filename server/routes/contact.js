const {contact}=require("../controllers/contact")

const router = require("express").Router();

router.post("/contact", contact)

module.exports = router; 