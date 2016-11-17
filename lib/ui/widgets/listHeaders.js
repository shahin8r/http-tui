var Blessed = require('blessed');
var Styles = require('../styles.json')

var listHeaders = Blessed.List({
  top: 1,
  left: 25,
  width: '50%',
  shrink: true,
  border: {
    type: 'line'
  },
  hidden: true,
  padding: 1,
  style: Styles.listHeaders,
  keys: true,
  items: [],
  label: ' [+] '
});

module.exports = listHeaders;
