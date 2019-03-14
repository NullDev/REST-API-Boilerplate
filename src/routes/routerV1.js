"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

// Dependendies
let express = require("express");

// Core Modules
let fs = require("fs");
let path = require("path");

// Utils
let log = require("../utils/logger");
let config = require("../utils/configHandler").getConfig();

// Modules
let getRoutes = require("./modules/getRoutes");
let robotsHandler = require("./modules/robotsHandler");
let sitemapHandler = require("./modules/sitemapHandler");

// Init router
let routes;
let router = express.Router();

// Routes
router.get("/", require("./v1/apiRoot"));

router.get("/user/get", require("./v1/users/get"));
router.get("/user/getAll", require("./v1/users/getAll"));

// Modules
router.get("/robots.txt", robotsHandler);
router.get("/sitemap.xml", (req, res) => {
    sitemapHandler(req, res, routes);
});

routes = getRoutes(router);
log.info("Registered routes for V1: ");
for (let i in routes) log.info("    Route '" + routes[i].path + "' registered with methods '" + (routes[i].methods).join(", ") + "'");

module.exports = router;
