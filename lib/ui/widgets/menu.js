var Blessed = require('blessed');
var cardinal = require('cardinal');
var Screen = require('../screen');
var listMethods = require('./listMethods');
var listHeaders = require('./listHeaders');
var textBody = require('./textBody');
var prompt = require('./prompt');
var Styles = require('../styles.json');

var hideOpened = () => {
  listMethods.hide();
  listHeaders.hide();
  textBody.hide();
};

var focusMenuBar = () => {
  menuBar.focus();
};

var showMethods = () => {
  hideOpened();
  focusMenuBar();

  listMethods.show();
  listMethods.focus();
};

var showHeaders = () => {
  hideOpened();
  focusMenuBar();

  listHeaders.show();
  listHeaders.focus();
};

var addHeader = () => {
  var addHeader = (err, data) => {
    if (data) {
      listHeaders.addItem(data);
    } else {
      Screen.remove(prompt);
    }

    Screen.render();
  };

  Screen.append(prompt);
  prompt.input('E.g Content-Type: application/json', '', addHeader);
};

var removeHeader = () => {
  listHeaders.removeItem(listHeaders.selected);
  Screen.render();
};

var showBody = () => {
  hideOpened();
  focusMenuBar();

  textBody.show();
  textBody.focus();
};

var editBody = () => {
  Screen.readEditor({value: textBody.content }, (err, data) => {
    if (data) {
      textBody.setContent(cardinal.highlight(data));
      Screen.render();
    }
  });
};

var menuCommands = {
  'METHOD': showMethods,
  'HEADERS': showHeaders,
  'BODY': showBody
};

Screen.key('1', showMethods);
Screen.key('2', showHeaders);
Screen.key('3', showBody);

var menuBar = Blessed.Listbar({
  top: 0,
  height: 3,
  width: '100%',
  keys: true,
  commands: menuCommands,
  border: {
    type: 'line'
  },
  style: Styles.menuBar,
  autoCommandKeys: true
});

module.exports = {
  menuBar: menuBar,
  hideOpened: hideOpened,
  editBody: editBody,
  addHeader: addHeader,
  removeHeader: removeHeader
};
