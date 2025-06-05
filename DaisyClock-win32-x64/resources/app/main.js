const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 240,
    height: 192,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: false,
      icon: path.join(__dirname, 'public', 'DaisySVG.ico'),
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    resizable: false,
    backgroundColor: '#00000000',
  });

  const startUrl =
    process.env.ELECTRON_START_URL || `file://${path.join(__dirname, '/build/index.html')}`;

  console.log('Loading URL:', startUrl);
  win.loadURL(startUrl);

  win.setMenu(null);
  win.setMenuBarVisibility(false);
  win.center();

  // Handle IPC messages
  ipcMain.on('minimize-window', () => {
    win.minimize();
  });

  ipcMain.on('close-window', () => {
    win.close();
  });

  // Handle window blur to hide banner
  win.on('blur', () => {
    win.webContents.send('window-blur');
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});