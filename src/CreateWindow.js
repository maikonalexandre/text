const { BrowserWindow } = require("electron");
const { resolve } = require("path");
const iconPath = resolve(__dirname, ".", "assets", "icone.png");

const CreateWindow = () => {
  const win = new BrowserWindow({
    width: 220,
    height: 220,
    webPreferences: {
      nodeIntegration: true,
      devTools: false,
    },
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    overlayFullscreenVideo: true,
    icon: iconPath,
  });

  win.loadFile("src/index.html");

  return win;
};

module.exports = CreateWindow();
