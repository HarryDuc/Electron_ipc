const {app, BrowserWindow, ipcMain} = require('electron')
let win;
function open() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.loadURL(__dirname + '/index.html')
}

ipcMain.on('play-game', () => {
  let win2 = new BrowserWindow({
    width: 400,
    height: 400,
    parent: win
  })
  let diachi = [
    'https://youtube.com',
    'https://facebook.com',
    'https://lienquan.garena.vn'
  ]
  win2.loadURL(diachi[Math.floor(Math.random() * 3)])
})
app.on('ready', open);
