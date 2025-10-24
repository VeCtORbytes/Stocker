const User = require("../Models/userModel");
const { createSecretToken } = require("../Util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
<<<<<<< HEAD

    // Validate input
    if (!email || !password || !username) {
      return res.json({ success: false, message: "All fields are required" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }
    
    // Create user
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    // ✅ FIXED: Environment-aware cookie settings
    res.cookie("token", token, {
      httpOnly: true, // Prevents JavaScript access (XSS protection)
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Cross-site in prod
      maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
    });
    
    res.status(201).json({ 
      message: "User signed in successfully", 
      success: true, 
      user: {
        email: user.email,
        username: user.username,
        _id: user._id
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      return res.json({ success: false, message: 'All fields are required' });
    }
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: 'User not found' }); 
    }
    
    // Verify password
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ success: false, message: 'Invalid password' }); 
    }
    
    // Create token
    const token = createSecretToken(user._id);
    
    // ✅ FIXED: Same secure cookie settings as Signup
    res.cookie("token", token, {
      httpOnly: true, // Prevents XSS attacks
      secure: process.env.NODE_ENV === "production", // HTTPS in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Cross-origin
      maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
    });
    
    res.status(200).json({ 
      message: "User logged in successfully", 
      success: true,
      user: {
        email: user.email,
        username: user.username,
        _id: user._id
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ NEW: Logout function that was missing
module.exports.Logout = async (req, res) => {
  try {
    // Clear the cookie by setting it to empty with immediate expiration
    res.cookie("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 0 // Expire immediately
    });
    
    res.status(200).json({ 
      message: "User logged out successfully", 
      success: true 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
=======
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(password,user.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }
       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "User logged in successfully", success: true });
       next()
    } catch (error) {
      console.error(error);
    }
  }
>>>>>>> origin/master
