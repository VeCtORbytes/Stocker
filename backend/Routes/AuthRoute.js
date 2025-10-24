<<<<<<< HEAD
const { Signup, Login, Logout } = require("../controllers/AuthController");
const { userVerification } = require("../middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout); // ✅ Added logout route
router.post("/", userVerification);
=======
const { Signup, Login} = require("../controllers/AuthController");
const {userVerification} = require("../middleware/AuthMiddleware");
const { HoldingModel } = require("../model/HoldingModel");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login)
router.post("/",userVerification)
router.post('/allHoldings' ,HoldingModel)
>>>>>>> origin/master

module.exports = router;