var Blessed = require('blessed');
var Styles = require('../styles.json');

var textBody = Blessed.box({
  top: 'center',
  left: 'center',
  hidden: true,
  mouse: false,
  keys: true,
  vi: true,
  scrollable: true,
  alwaysScroll: true,
  width: '90%',
  height: '90%',
  border: {
    type: 'line'
  },
  style: Styles.textBody,
  label: ' [ENTER] '
});

module.exports = textBody;
