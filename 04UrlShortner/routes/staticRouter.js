const express = require("express");
const URL = require("../models/url");
const staticRoute = express.Router();

staticRoute.get("/", async(req, res) => {
    const allUrls = await URL.find({})
    return res.render("home",{
        allUrls: allUrls,
    });
})

module.exports = staticRoute;

