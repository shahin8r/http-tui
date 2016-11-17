var Blessed = require('blessed');
var Styles = require('../styles.json');

var buttonSend = Blessed.button({
  bottom: 0,
  height: 3,
  right: 0,
  keys: true,
  width: 10,
  border: {
    type: 'line'
  },
  style: Styles.buttonSend,
  content: 'GET',
  align: 'center',
  tags: true
});

module.exports = buttonSend;
