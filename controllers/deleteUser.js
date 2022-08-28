const User = require("../models/user");

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).send("user not found...");

    await User.findByIdAndDelete(req.params.id);

    res.redirect("/");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = deleteUser;
