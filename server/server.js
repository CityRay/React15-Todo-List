var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

console.log(process.env.NODE_ENV);
var app = express();

//app.use(webpack in dev);
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use('/dist', express.static('./dist'));
app.use('/dist', express.static('./styles'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});


var port = +(process.argv[2]) || 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
  console.log("http://localhost:" + port);
  require("openurl").open("http://localhost:" + port);
});
