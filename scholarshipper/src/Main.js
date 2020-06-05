const electron = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')
// require('electron-reload')
const { app, BrowserWindow, Menu, ipcMain } = electron
const db = require('./models/models.ts')

// point of entry
let mainWindow
// add window
let addWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 725,
    // icon: `${__dirname}/assets/icons/ScholarShipperIcon_.png`,
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
  // addWindow.close();
})

// studentWindow
ipcMain.on('resize', function (e, x, y) {
  mainWindow.setSize(x, y);
})

app.on('closed', function () {
  mainWindow = null;
});

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
        accelerator: 'Command+A',
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
      },
      {
        label: 'Alan'
      },
      {
        label: 'Brian'
      },
      {
        label: 'Marcus'
      },
      {
        label: 'Todd'
      }
    ]
  })
} 

// Catch getAllStudents renderer process from Student.tsx
ipcMain.on('getAllStudents', (event, data) => {
  const getAllStudentsQuery = `SELECT * FROM students`
  
  db.query(getAllStudentsQuery)
    .then (students => {
      console.log('retrieving students from DB:', students.rows);
      event.sender.send('gotAllStudents', students.rows);
    })
    .catch(e => {
      console.log("Error while fetching students from DB: ", e);
    });
})

// Catch saveStudent renderer process from Student.tsx
ipcMain.on('saveStudent', (event, data) => {
  console.log('data in ipcMain: saveStudent', data);
  
  // Save data from renderer process to db.
  const values = data;
  
  const addStudentQuery = `INSERT INTO students(user_id, notes, first_name, priority, created_on)
  VALUES ($1, $2, $3, $4, $5)`
  
  db.query(addStudentQuery, values)
    .then(students => {
      console.log('saved student into DB')
      
    })
    .catch(e => {
      console.log("Error while saving to DB: ", e);
    })
})

// Catch deleteStudent renderer process from Student.tsx
ipcMain.on('deleteStudent', (event, data) => {
  console.log('data in ipcMain: deleteStudent', data);
  
  const value = [data]
  // Save data from renderer process to db.  
  const deleteStudentQuery = `DELETE FROM students WHERE user_id = ($1)`
  
  db.query(deleteStudentQuery, value)
    .then(students => {
      console.log(`deleted student ${value} from DB`)
    })
    .catch(e => {
      console.log("Error while deleting from DB: ", e);
    })
})


