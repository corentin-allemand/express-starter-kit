// Imports
var express = require('express');

// Methods
module.exports = {
  profile: function (req, res) {
    res.status(200).json({
      success: 'your API is connected <3'
    });
  }
};