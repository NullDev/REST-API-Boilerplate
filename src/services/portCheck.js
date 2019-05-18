"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

let log = require("../utils/logger");

module.exports = function(port){
    const appPort = port || 3000;

    if (!port) log.warn("No port specified. Using default: 3000");

    if (appPort < 1 || appPort > 65535){
        log.error(`Invalid port specified: ${appPort}\nStopping...`);
        process.exit(1);
    }

    else return appPort;
};
