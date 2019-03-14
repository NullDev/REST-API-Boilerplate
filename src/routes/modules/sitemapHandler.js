"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

// Utils
let config = require("../../utils/configHandler").getConfig();

/**
 * Generate sitemap.xml
 *
 * @param {*} req
 * @param {*} res
 * @param {*} routesRaw
 */
module.exports = function(req, res, routesRaw){
    res.type("text/xml");

    /* eslint-disable quotes */

    let routes = [];
    for (let route of routesRaw) routes.push(route.path);

    // Remove duplicated routes (GET/POST)
    routes = routes.filter((elem, pos) => {
        return routes.indexOf(elem) === pos;
    });

    let routeString = "";
    for (let route of routes){
        if (route === "*") continue;

        routeString += `    <url>\n` +
                       `        <loc>${config.meta.protocol}://${config.meta.domain}${route}</loc>\n` +
                       `        <changefreq>monthly</changefreq>\n` +
                       `    </url>\n`;
    }

    res.send(
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        routeString +
        `</urlset>\n`
    );
};
