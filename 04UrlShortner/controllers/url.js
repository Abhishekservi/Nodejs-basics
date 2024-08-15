const { nanoid } = require('nanoid'); 
const URL = require('../models/url');

async function handlegenerateNewShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'URL is required'});
    const shortId = nanoid(7);
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.json({ id: shortId });
}

async function handleRedirectUrl(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );
  
    res.redirect(entry.redirectUrl);
  
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    if(!result) return res.status(404).json({error: 'URL not found'});
    return res.json({totalClicks: result.visitHistory.length,
        analytics: result.visitHistory});
}; 



module.exports = {
    handlegenerateNewShortUrl,
    handleRedirectUrl,
    handleGetAnalytics
}