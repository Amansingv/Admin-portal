const User = require("../models/user");
const createUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered");

    const { name, email } = req.body;

    user = new User({ name, email });
    user = await user.save();
    const users = await User.find();
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = createUser;
