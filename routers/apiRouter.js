// Imports
const express = require('express');

// Controllers
const apiController = require('../controllers/api/apiController');




exports.router = (function () {
    let router = express.Router();

    // apiController routes
    router.route('/').get(apiController.profile);

    return router;
})();