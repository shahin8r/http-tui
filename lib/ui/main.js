var Screen = require('./screen');

var components = {
  menu: require('./widgets/menu').menuBar,
  responseBox: require('./widgets/responseBox'),
  statusBar: require('./widgets/statusBar'),
  inputUrl: require('./widgets/inputUrl'),
  buttonSend: require('./buttons/buttonSend'),
  listMethods: require('./widgets/listMethods'),
  listHeaders: require('./widgets/listHeaders'),
  textBody: require('./widgets/textBody'),
  prompt: require('./widgets/prompt')
};

for (var i in components) {
  Screen.append(components[i]);
}

components.menu.focus();

Screen.render();
