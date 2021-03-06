var Blessed = require('blessed');
var Styles = require('../styles.json');

var statusBar = Blessed.box({
  bottom: 4,
  left: 'center',
  hidden: true,
  width: '100%-2',
  height: 1,
  tags: true,
  padding: {
    left: 1,
    right: 1
  },
  style: Styles.statusBar,
  align: 'right'
});

module.exports = statusBar;
