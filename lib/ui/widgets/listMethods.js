var Blessed = require('blessed');
var Styles = require('../styles.json')

var listMethods = Blessed.List({
  top: 1,
  left: 12,
  height: '50%',
  width: 25,
  border: {
    type: 'line'
  },
  padding: {
    left: 1,
    right: 1
  },
  style: Styles.listMethods,
  keys: true,
  hidden: true,
  interactive: true,
  items: [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE'
  ]
});

module.exports = listMethods;
