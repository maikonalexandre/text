const { app, globalShortcut } = require("electron");

const App = () => {
  var win = require("./CreateWindow.js");
  const tray = require("./Tray.js");

  // function createDevTolls() {
  //   win.webContents.toggleDevTools();
  // }

  function closeWin() {
    win.close();
  }

  function expandWin() {
    const size = win.getContentSize().map((element) => {
      if (element == 220) {
        win.setContentSize(400, 400);
      } else if (element == 400) {
        win.setContentSize(220, 220);
      }else if(element == 600){
        win.setContentSize(220, 220);
      }
    });
  }

  function maxWidth() {
    const size = win.getContentSize().map((element) => {
      if (element == 220 || element == 400) {
        win.setContentSize(600, 600);
      }else if(element == 600){
        win.setContentSize(220, 220);
      }
    });
  }

  function minimizableWin() {
    const x = win.isMinimized();

    const y = win.isMaximized();

    const z = win.isFocused();

    console.log(x, y, z);

    if (win.isFocused() == true) {
      win.minimize();
    } else {
      win.focus();
    }
  }

  function createShortCuts() {
    globalShortcut.register("Ctrl+3", maxWidth);
    globalShortcut.register("Ctrl+0", closeWin);
    globalShortcut.register("Ctrl+2", expandWin);
    globalShortcut.register("Ctrl+1", minimizableWin);
  }

  createShortCuts();

  tray.on("click", () => {
    win.close();
  });
};

app.whenReady().then(App);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
