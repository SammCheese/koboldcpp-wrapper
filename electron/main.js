const { join } = require("path");
const { app, BrowserWindow } = require("electron");
const { config } = require("dotenv");

// Attempt Parsing the env file
config("../.env")

const isDev = process.env.IS_DEV;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: join(__dirname, './preload/preload.js'),
    },
    autoHideMenuBar: true,
    frame: false,
    titleBarOverlay: false
  })

  win.loadURL(
    isDev
      ? `http://localhost:${process.env.DEV_PORT}`
      : `file://${join(__dirname, '../public/index.html')}`
  );

  if (isDev) {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) 
    createWindow();
});

app.on('web-contents-created', (event, webContents) => {
  if (webContents.hostWebContents) {
    webContents.on('will-navigate', (event) => {
      event.preventDefault()
    })
  }
})