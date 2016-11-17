var Blessed = require('blessed');
var Styles = require('../styles.json');

var prompt = Blessed.Prompt({
  top: 'center',
  height: 6,
  left: 'center',
  border: {
    type: 'line'
  },
  style: Styles.prompt,
});

module.exports = prompt;
