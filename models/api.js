const User = require("./user");
const createUser = require("../controllers/createUser");
const getUsers = require("../controllers/getUsers");
const deleteUser = require("../controllers/deleteUser");
const express = require("express");
const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", deleteUser);

module.exports = router;
