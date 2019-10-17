"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

module.exports = function(req, res, app){
    let response = {
        "error": "no route specified"
    };

    res.set({
        "Content-Type": "application/json; charset=utf-8"
    }).status(200).send(response);
};
