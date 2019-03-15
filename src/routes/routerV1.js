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
router.get("/", require("./v1/apiRoot"));

router.get("/users/", require("./v1/users/users"));
router.get("/users/get", require("./v1/users/get"));
router.get("/users/getAll", require("./v1/users/getAll"));

module.exports = router;
