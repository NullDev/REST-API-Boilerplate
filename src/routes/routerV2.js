"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

// Dependendies
let express = require("express");

// Init router
// eslint-disable-next-line new-cap
let router = express.Router();

// Routes
router.get("/", require("./v2/apiRoot"));

router.get("/users/", require("./v2/users/users"));
router.get("/users/get", require("./v2/users/get"));
router.get("/users/getAll", require("./v2/users/getAll"));

module.exports = router;
