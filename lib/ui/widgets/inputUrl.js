var Blessed = require('blessed');
var Styles = require('../styles.json');

var inputUrl = Blessed.textbox({
  input: true,
  keys: true,
  left: 0,
  bottom: 0,
  style: Styles.inputUrl,
  border: {
    type: 'line'
  },
  padding: {
    left: 1,
    right: 1
  },
  height: 3,
  tags: true,
  width: '100%-10',
  label: ' {#333-fg}[§]{/#333-fg} '
});

module.exports = inputUrl;
