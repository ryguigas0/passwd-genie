const { app, BrowserWindow, ipcMain } = require("electron")
const zvcvbn = require("zxcvbn")

let mainWindow

app.whenReady().then(() => {
    console.log("Running password generator")
    mainWindow = new BrowserWindow({
        width: 370, height: 600,
        fullscreenable: false,
        resizable: false,
        darkTheme: true,
        webPreferences: {
            nodeIntegration: true
        },
        autoHideMenuBar: true,
        titleBarStyle: "hidden",
        backgroundColor: "#000000"
    })
    /* mainWindow.webContents.openDevTools() */
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
})

ipcMain.on("checkPassword", (event, password) => {
    let { score } = zvcvbn(password)
    mainWindow.webContents.send("passwordChecked", score)
})

app.once("window-all-closed", () => { app.quit() })