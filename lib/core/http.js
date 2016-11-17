var req = require('request');
var cardinal = require('cardinal');

var isJSON = (data) => {
  try {
    JSON.parse(data);
  } catch (err) {
    return false;
  }

  return true;
};

var http = (url, method, headers, body, result) => {
  var validUrl = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
  if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1 ) url = 'http://' + url;

  if (!url.match(validUrl) && url.indexOf('localhost') == -1) return result({ error: 'Need an URL to work with...' });

  var httpOptions = {
    url: url,
    method: method,
    headers: headers,
    body: body,
    time: true
  };

  var httpResponse = (error, response, body) => {
    if (!error && isJSON(body)) body = cardinal.highlight(body);

    return result({
      error: error,
      response: response,
      body: body
    });
  };

  req(httpOptions, httpResponse);
};

module.exports = http;
