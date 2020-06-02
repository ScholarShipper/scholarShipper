const electron = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')
require('electron-reload')
const { app, BrowserWindow, Menu, ipcMain } = electron

// point of entry
let mainWindow
// add window
let addWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
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

// catch cohort:add
ipcMain.on('cohort:add', function(e, cohort) {
  console.log(cohort);
  mainWindow.webContents.send('cohort:add', cohort);
  addWindow.close();
})

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

// add new window
function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Add New Cohort',
    webPreferences: {
      nodeIntegration: true,
    },
  });
  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'addWindow.html'),
    protocol: 'file:',
    slashes: true
  }));
  // garbage collection for optimization
  addWindow.on('closed', () => {
    addWindow = null;
  })
}

// create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Add Cohort',
        click() {
          createAddWindow();
        }
      },
      {
        label: 'Clear Cohort',
        click() {
          mainWindow.webContents.send('cohort:clear');
        }
      },
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