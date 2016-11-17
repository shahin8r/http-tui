var Blessed = require('blessed');

var Screen = Blessed.screen({
  title: 'http-gui',
  smartCSR: true
});

module.exports = Screen;
