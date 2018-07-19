// Imports
var express = require('express');

// Methods
module.exports = {
  index: function (req, res) {
    res.render('index', {
        title: 'Home',
        message: 'My Express starter kit'
    })
  }
};
