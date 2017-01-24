var Blessed = require('blessed');
var Styles = require('../styles.json');

var responseBox = Blessed.box({
  top: 3,
  scrollable: true,
  alwaysScroll: true,
  keys: true,
  vi: true,
  width: '100%',
  height: '100%-6',
  border: {
    type: 'line'
  },
  padding: {
    bottom: 1
  },
  style: Styles.responseBox,
  scrollbar: true,
  tags: true,
  label: ' {#333-fg}[0]{/#333-fg} '
});

module.exports = responseBox;
