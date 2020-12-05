const { app, BrowserWindow, ipcMain } = require("electron")

app.on('ready', () => {
    console.log("Running password generator")
    let janelaPrincipal = new BrowserWindow({
        width: 1000, height: 800,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    janelaPrincipal.loadURL(`file://${__dirname}/app/index.html`)
})

app.on("window-all-closed", () => { app.quit() })