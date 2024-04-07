const User = require("../models/user");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({ error: "Name is required" });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email is already being used" });
    }

    // Assuming you've handled all input validations above this point
    const user = await User.create({ name, email, password });

    // Upon successful creation, return a success message
    return res.json({ message: "User registered successfully" }); // This line sends a success response
  } catch (error) {
    // If an error occurs during the process, catch it and return an error response
    return res.status(500).json({ error: "An error occurred on the server." });
  }
};

module.exports = {
  test,
  registerUser,
};
