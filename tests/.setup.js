require('babel-register')();

var chai = require('chai');
var sinon = require('sinon');
var jsdom = require('jsdom').jsdom;

var expect = chai.expect;

var exposedProperties = ['window', 'navigator', 'document'];

global.expect = expect;
global.sinon = sinon;
global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
