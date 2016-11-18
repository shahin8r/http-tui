var Screen = require('./ui/screen');
var menu = require('./ui/widgets/menu');
var listMethods = require('./ui/widgets/listMethods');
var listHeaders = require('./ui/widgets/listHeaders');
var textBody = require('./ui/widgets/textBody');
var responseBox = require('./ui/widgets/responseBox');
var statusBar = require('./ui/widgets/statusBar');
var inputUrl = require('./ui/widgets/inputUrl');
var buttonSend = require('./ui/buttons/buttonSend');
var httpRequest = require('./ui/widgets/httpRequest');

// screen
Screen.key('0', () => {
  menu.hideOpened();
  responseBox.focus();
});

Screen.key('.', () => {
  menu.hideOpened();
  inputUrl.readInput();
});

Screen.key(['C-c', 'q', 'Q'], () => {
  process.exit(0);
});

// menu
menu.menuBar.key('escape', () => {
  menu.hideOpened();
  responseBox.focus();
});

listMethods.on('select', (item) => {
  listMethods.hide();
  buttonSend.setContent(item.content);
  Screen.render();
});

listMethods.on('cancel', () => {
  listMethods.hide();
});

listHeaders.on('cancel', () => {
  listHeaders.hide();
});

listHeaders.key('+', () => {
  menu.addHeader();
});

listHeaders.key('-', () => {
  menu.removeHeader();
});

textBody.key('enter', () => {
  menu.editBody();
});

textBody.key('escape', () => {
  textBody.hide();
});

// url input
inputUrl.key('escape', () => {
  menu.hideOpened();
  menu.menuBar.focus();
});

inputUrl.on('submit', () => {
  buttonSend.focus();
});

// button send
buttonSend.key('escape', () => {
  menu.hideOpened();
  menu.menuBar.focus();
});

buttonSend.key('enter', () => {
  httpRequest();
});
