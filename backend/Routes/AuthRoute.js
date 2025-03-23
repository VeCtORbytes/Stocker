const { Signup, Login} = require("../controllers/AuthController");
const {userVerification} = require("../middleware/AuthMiddleware");
const { HoldingModel } = require("../model/HoldingModel");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login)
router.post("/",userVerification)
router.post('/allHoldings' ,HoldingModel)

module.exports = router;