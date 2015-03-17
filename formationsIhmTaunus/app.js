'use strict';

var taunus = require('taunus');
var taunusExpress = require('taunus-express');
var express = require('express');
var jade = require("jadum/runtime");
var app = express();
var serveStatic = require('serve-static');
var options = {
	routes: require('./controllers/routes'),
	layout: require('./.bin/views/layout')
};

app.use(serveStatic('.bin/public'));
taunusExpress(taunus, app, options);
app.listen(3001);