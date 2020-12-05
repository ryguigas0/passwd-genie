const { app, BrowserWindow } = require("electron")

app.whenReady().then(() => {
    console.log("Running password generator")
    let mainWindow = new BrowserWindow({
        width: 1000, height: 800,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
})

app.once("window-all-closed", () => { app.quit() })