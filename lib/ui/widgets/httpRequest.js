var Screen = require('../screen');
var http = require('../../core/http');
var listMethods = require('./listMethods');
var listHeaders = require('./listHeaders');
var textBody = require('./textBody');
var responseBox = require('./responseBox');
var statusBar = require('./statusBar');
var inputUrl = require('./inputUrl');

var httpRequest = () => {
  var url = inputUrl.value;
  var method = listMethods.value;
  var headers = {};
  var body = textBody.content;

  listHeaders.items.forEach((item) => {
    var headersKey = item.content.substring(0, item.content.indexOf(':'));
    var headersValue = item.content.substr(item.content.indexOf(':') + 1);

    headers[headersKey] = headersValue;
  });

  responseBox.setContent('{center}Fetching...{/center}');
  Screen.render();

  http(url, method, headers, body, (result) => {
    statusBar.show();

    if (!result.error) {
      responseBox.setContent(result.body);
      statusBar.setContent('STATUS: ' + result.response.statusCode + ' ' + result.response.statusMessage + ' / ' + result.response.elapsedTime + 'ms');
      responseBox.focus();
    } else {
      responseBox.setContent('');
      statusBar.setContent('{red-fg}' + result.error + '{/red-fg}');
    }

    Screen.render();
  });
};

module.exports = httpRequest;
