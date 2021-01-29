// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const url = require('url');
const path = require('path');
const customTitlebar = require('custom-electron-titlebar');

window.addEventListener('DOMContentLoaded', () => {
  const titlebar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#000'),
    icon: url.format(path.join(__dirname, '/logo.svg')),
    itemBackgroundColor: customTitlebar.Color.fromHex('#242424'),
    unfocusEffect: true
  });
  titlebar.updateTitle('Launcher');
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  for (const type of ['chrome', 'node', 'electron']) { replaceText(`${type}-version`, process.versions[type]); }
});