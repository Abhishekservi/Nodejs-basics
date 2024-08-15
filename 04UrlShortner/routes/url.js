const express = require('express');
const { handlegenerateNewShortUrl, handleRedirectUrl, handleGetAnalytics } = require('../controllers/url');
const router = express.Router();

router.post('/', handlegenerateNewShortUrl)

router.get("/:shortId",handleRedirectUrl);

router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;