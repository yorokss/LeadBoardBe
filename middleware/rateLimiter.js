const rateLimiters = require("express-rate-limit");


let rateLimiter = rateLimiters({
    windowMs: 15 * 60 * 1000, 
    max: 50,
    message: { error: "Too many requests, please try again later." },
    standardHeaders: true, 
    legacyHeaders: false, 
});

module.exports = rateLimiter;