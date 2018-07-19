// Imports
const createError  = require('http-errors');
const express      = require('express');
const path         = require('path');
const debug        = require('debug')('http');

// Environment setup
let conf      = require('./conf/server.json');
let env       = conf.development;
debug.enabled = env.debug;

// Server setup
let app  = express();

app.listen(env.port, function () {
  debug('listening', env.host + ':' + env.port);
})

// Routers setup
let apiRouter = require('./routers/apiRouter').router;
app.use('/api', apiRouter);

let websiteRouter = require('./routers/websiteRouter').router;
app.use('/', websiteRouter);

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public'))); 

// Catch error and render it (always the last tested route)
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

// Set access to the instance
module.exports = app;
