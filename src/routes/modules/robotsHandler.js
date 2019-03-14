"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

// Utils
let config = require("../../utils/configHandler").getConfig();

/**
 * Generate robots.txt
 *
 * @param {*} req
 * @param {*} res
 */
module.exports = function(req, res){
    let cYear = (new Date()).getFullYear();
    res.type("text/plain");
    res.send(
        "#" + "-".repeat(17 + cYear.toString().length + (config.meta.name).length) + "#\n" +
        "# Copyright (c) " + cYear + " " + config.meta.name + " #\n" +
        "#" + "-".repeat(17 + cYear.toString().length + (config.meta.name).length) + "#\n\n" +
        "# Crawling the API is unnecessary and noisy.\n" +
        "# Therefore it is prohibited.\n\n" +
        "user-agent: *\n" +
        "Allow: /$\n" +
        "Disallow: /\n\n" +
        "Sitemap: /sitemap.xml\n"
    );
};
