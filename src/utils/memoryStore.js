"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

function MemoryStore(windowMs){
    let hits = {};

    this.incr = function(key, cb){
        if (hits[key]) hits[key]++;
        else hits[key] = 1;

        cb(null, hits[key]);
    };

    this.decrement = function(key){
        if (hits[key]) hits[key]--;
    };

    this.resetAll = function(){
        hits = {};
    };

    this.resetKey = function(key){
        delete hits[key];
    };

    let interval = setInterval(this.resetAll, windowMs);

    if (interval.unref) interval.unref();
}

module.exports = MemoryStore;
