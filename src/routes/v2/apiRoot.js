"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

module.exports = function(req, res, app){
    let respone = {
        "status": "ok",
        "api_version": "v2"
    };

    res.set({
        "Content-Type": "application/json; charset=utf-8"
    }).status(200).send(respone);
};
