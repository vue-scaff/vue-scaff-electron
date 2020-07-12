// Import Browser App
import { BrowserWindow } from "electron";

// Import Vue Devtools
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";

/**
 * Create Window
 * ======== ======== ========
 */
export default (options, callback) => {
  // Create Window
  let win;

  // Create the browser window.
  win = new BrowserWindow({
    ...options,
    frame: true,
    webPreferences: {
      webSecurity: false, // 跨域
      nodeIntegration: true
    }
  });

  // On Close
  win.on("closed", () => {
    win = null;
  });

  // Dev Mode
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);

    // Open Dev Tools for Test Mode
    if (!process.env.IS_TEST) {
      win.webContents.openDevTools();
    }
  } else {
    // Create Protocol
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  // Promise
  return callback ? callback(win) : win;
};
