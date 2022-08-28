const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render("admins", { users: users });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getUsers;
