"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

module.exports = function(req, res, app){
    let respone = {
        "error": "no route specified"
    };

    res.set({
        "Content-Type": "application/json; charset=utf-8"
    }).status(200).send(respone);
};
