const User = require("../Models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.json({ status: false, message: "No token provided" });
  }
  
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false, message: "Invalid token" });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        return res.json({ 
          status: true, 
          user: {
            username: user.username,
            email: user.email,
            _id: user._id
          }
        });
      } else {
        return res.json({ status: false, message: "User not found" });
      }
    }
  });
};