var Blessed = require('blessed');

var Screen = Blessed.screen({
  title: 'frid',
  smartCSR: true
});

module.exports = Screen;
