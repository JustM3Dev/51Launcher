const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const open = require('open');

try {
  require('electron-reloader')(module)
} catch {
  console.warn("Couldnt load hot-reload module.")
}
let mainWindow;
function createWindow() {
  var mainWindow = new BrowserWindow({
    show: false,
    width: 900,
    height: 600,
    minWidth: 900,
    minHeight: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: true,
      nodeIntegration: true,
    }
  });
  mainWindow.once('ready-to-show', () => { mainWindow.show(); });
  mainWindow.loadFile('public/index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  const contents = mainWindow.webContents;
  var menu = Menu.buildFromTemplate([
    {
      label: 'Tools',
      submenu: [
        {
          label: 'Home',
          click() {
            mainWindow.loadFile('public/index.html');
          }
        },
        {
          label: 'Reload',
          click() {
            contents.reload();
          }
        },
        {
          label: 'Our website',
          click() {
            open("https://www.51devs.xyz/");
          }
        },
        {
          label: 'Dev tools',
          click() {
            contents.openDevTools();
          }
        },
        {
          label: 'Exit',
          click() {
            app.quit();
          }
        }
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);
}
app.on('ready', createWindow);
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', function () { if (mainWindow === null) createWindow(); });