"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

module.exports = function(req, res, app){
    let respone = {
        "info": "this endpoint could be used to get all users"
    };

    res.set({
        "Content-Type": "application/json; charset=utf-8"
    }).status(200).send(respone);
};
