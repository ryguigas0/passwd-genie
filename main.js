const { app, BrowserWindow } = require("electron")

app.whenReady().then(() => {
    console.log("Running password generator")
    let mainWindow = new BrowserWindow({
        width: 370, height: 570,
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
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
})

app.once("window-all-closed", () => { app.quit() })