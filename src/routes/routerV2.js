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
router.get("/", require("./v2/apiRoot"));

router.get("/users/get", require("./v2/users/get"));
router.get("/users/getAll", require("./v2/users/getAll"));

// Modules
router.get("/robots.txt", robotsHandler);
router.get("/sitemap.xml", (req, res) => {
    sitemapHandler(req, res, routes);
});

routes = getRoutes(router);
log.info("Registered routes for V2: ");
for (let i in routes) log.info("    Route '" + routes[i].path + "' registered with methods '" + (routes[i].methods).join(", ") + "'");

module.exports = router;
