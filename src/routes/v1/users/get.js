"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

module.exports = function(req, res, app){
    let response = {
        "info": "this endpoint could be used to get a single user"
    };

    res.set({
        "Content-Type": "application/json; charset=utf-8"
    }).status(200).send(response);
};
