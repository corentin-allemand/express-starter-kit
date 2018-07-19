// Imports
const express = require('express');

// Controllers
const websiteController = require('../controllers/website/websiteController');

exports.router = (function () {
    let router = express.Router();
    
    // websiteController routes
    router.route('/').get(websiteController.index);

    return router;
})();