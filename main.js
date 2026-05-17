const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            webSecurity: false,
            contextIsolation: false
        },
        transparent: true,
        frame: false
    });

    win.loadURL('https://www.donationalerts.com/widget/alerts?group_id=XXXX');
}

app.whenReady().then(createWindow);
