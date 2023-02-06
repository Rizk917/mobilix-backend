const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/user");

//Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check user email
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

/////////////////////////////////////

//Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  ////////////////////////////////////////////////////////////////////

  //check if the user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPAssword = await bcrypt.hash(password, salt);

  //create user

  const user = await User.create({
    name,
    email,
    password: hashedPAssword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//My User
const getMe = asyncHandler(async (req, res) => {
const{_id,name,email}=await User.findById(req.user.id)
res.status(200).json({
  id:_id,
  name,
  email
})


});









// Gen JWT 
const generateToken=(id)=>{
  return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d',})
}



module.exports = {
  registerUser,
  loginUser,
  getMe,
};
