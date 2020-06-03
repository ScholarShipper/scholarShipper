const electron = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')
require('electron-reload')
const { app, BrowserWindow, Menu, ipcMain } = electron

// point of entry
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    // if in dev mode, use webserver; if in prod mode, use electron serving index.html
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
    {protocol: 'file: ', slashes: true}
  )

  mainWindow.on('closed', () => {
    mainWindow = null;
    // close sub windows when main window is closed
    app.quit();
  })

  const mainmenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainmenu);
};

// listen for when app is ready
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
});

// create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        // quit hotkeys depending on mac or windows
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q', 
        click() {
          app.quit();
        }
      }
    ]
  }
]

// add developer tools
if (process.env.node_env !== 'production') {
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I', 
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'Reload'
      }
    ]
  })
} 
