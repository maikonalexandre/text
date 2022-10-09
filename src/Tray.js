const { Tray } = require("electron");
const { resolve } = require("path");

const iconPath = resolve(__dirname, ".", "assets", "icone.png");

function createTray() {
  const tray = new Tray(iconPath);
  return tray;
}

module.exports = createTray();
