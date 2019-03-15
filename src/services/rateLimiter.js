"use strict";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

// Utils
let log = require("../utils/logger");
let MemoryStore = require("../utils/memoryStore");
let config = require("../utils/configHandler").getConfig();

module.exports = function(){
    // eslint-disable-next-line no-param-reassign
    let options = {
        windowMs: config.ratelimit.timeframe * 60 * 1000,
        max: config.ratelimit.max_requests,
        skipFailedRequests: false,
        keyGenerator: function(req){
            return req.ip;
        },
        handler: function(req, res){
            res.setHeader("Retry-After", Math.ceil(options.windowMs / 1000));
            res.json({
                "error": 1,
                "message": `Rate limit reached. IP has been set to cooldown. Allowed are ${config.ratelimit.max_requests} requests every ${config.ratelimit.timeframe} minutes.`,
                "max_requests": config.ratelimit.max_requests,
                "timeframe": config.ratelimit.timeframe
            });
            log.warn("Rate limit reached for IP " + req.ip);
        }
    };

    options.store = options.store || new MemoryStore(options.windowMs);

    if (typeof options.store.incr !== "function" || typeof options.store.resetKey !== "function"){
        return log.error("The store is not valid.");
    }

    function rateLimit(req, res, next){
        if (!config.ratelimit.enabled) return next();

        let key = options.keyGenerator(req);

        options.store.incr(key, (err, current) => {
            if (err) return next(err);

            req.rateLimit = {
                limit: options.max,
                current: current,
                remaining: Math.max(options.max - current, 0)
            };

            res.setHeader("X-RateLimit-Limit", options.max);
            res.setHeader("X-RateLimit-Remaining", req.rateLimit.remaining);

            if (options.max && current > options.max){
                return options.handler(req, res);
            }

            next();
        });
    }

    rateLimit.resetKey = options.store.resetKey.bind(options.store);
    rateLimit.resetIp  = rateLimit.resetKey;

    return rateLimit;
};
