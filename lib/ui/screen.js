var Blessed = require('blessed');

var Screen = Blessed.screen({
  title: 'http-tui',
  smartCSR: true
});

module.exports = Screen;
