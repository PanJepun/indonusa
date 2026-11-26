const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1360, height: 900,
    autoHideMenuBar: true, show: false,
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });
  win.maximize(); win.show();
  win.loadFile('index.html');
}
Menu.setApplicationMenu(null);
app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });