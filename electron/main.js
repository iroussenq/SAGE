const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    //mainWindow.loadURL("http://localhost:4200/"); Para caso de desenvolvimento em real time, sem buildar imagem
    const angularAppPath = path.join(__dirname, '../sage-frontend/dist/sage-frontend/browser/index.html');
    mainWindow.loadFile(angularAppPath);

    // Open the DevTools.
    //mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})