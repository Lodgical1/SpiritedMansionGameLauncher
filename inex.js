const {app, BrowserWindow} = require(electron)

function createWindow() {
    const win = new BrowserWindow({
        height: 200,
        width: 600,
        webPrefrances: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        icon: path.join(_dirname, 'assets', 'img', 'icon.png'),
        title: 'Spirited Mansion Launcher'
    });

    win.setTitle('Spirited Mansion Launcher')
    win.loadFile('index.html')
    win.webContents.openDevTools
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (Process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});