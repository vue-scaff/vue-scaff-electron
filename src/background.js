"use strict";

// Package.json
import { version } from "../package.json";

// Injection: https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions
import injection from "../injection.json";

// Utils
import { create, update, traffic, effect, slide } from "./background-stock";

// Import Browser App
import { app, protocol, ipcMain, screen, dialog } from "electron";

// Get Debug Set from Injection
const { debug, env, width, height, minWidth, minHeight, updateUrl } = injection;

// Get Effect Func
const { show, hide } = effect;

// Get Mode Development
const dev = process.env.NODE_ENV === "development";

// Global
let win;

// Screen View
let view;

// Platform
let platform = { win32: "win", darwin: "mac" }[process.platform];

// Set Update Events
const autoUpdater = update({
  error: (uploader, info) => {
    traffic(win, info, "update-error");
  },
  "checking-for-update": (uploader, info) => {
    traffic(win, info, "checking-for-update");
  },
  "update-available": (uploader, info) => {
    dialog
      .showMessageBox({
        type: "info",
        title: "应用程序更新",
        message: "发现有新版本可用，是否立即更新？",
        buttons: ["更新", "暂不"]
      })
      .then(({ response }) => {
        traffic(win, `index in update-available: ${response}`);

        if (response === 0) {
          uploader.downloadUpdate();
        }
      });

    traffic(win, info, "update-available");
  },
  "update-not-available": (uploader, info) => {
    traffic(win, info, "update-not-available");
  },
  "download-progress": (uploader, info) => {
    traffic(win, info, "download-progress");
  },
  "update-downloaded": (uploader, info) => {
    traffic(win, info, "update-downloaded");

    dialog
      .showMessageBox({
        type: "info",
        title: "应用程序更新",
        message: "更新补丁已下载完成，现在？",
        buttons: ["立即更新", "稍后再说"]
      })
      .then(({ response }) => {
        traffic(win, `index in update-downloaded: ${response}`);

        if (response === 0) {
          setImmediate(() => {
            autoUpdater.quitAndInstall();
          });
        }
      });
  }
});

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

// On Main Window
ipcMain.on("main-window", () => {
  // Set Effect
  const effect = () => {
    win.setContentSize(width, height);
    win.center();

    setTimeout(() => show(win), 60);
  };

  // Run Effect
  hide(win, () => effect);
});

// On Login Window
ipcMain.on("login-window", () => {
  // Set Effect
  const effect = () => {
    win.setContentSize(minWidth, minHeight);
    win.center();

    setTimeout(() => show(win), 60);
  };

  // Run Effect
  hide(win, () => effect);
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Activate on Created
app.on("activate", () => {
  // Activate on Created
  if (win === null) {
    win = create(injection);
  }
});

// Ready to Create Window
app.on("ready", () => {
  // Overrides
  app.allowRendererProcessReuse = true;

  /* Not Work

  // Test 4 Update
  autoUpdater.setFeedURL({
    provider: "generic",
    url: updateUrl
  });

  // Check 4 Update
  autoUpdater.checkForUpdates();

  */

  // Screen view
  view = screen.getAllDisplays();

  // Browser
  win = create(injection);

  // No Close
  // win.on("close", e => e.preventDefault());

  // Full Close
  win.on("close", e => {
    app.quit();
  });
});

// Exit cleanly on request from parent process in development mode.
if (dev) {
  switch (process.platform) {
    case "win32":
      // Windows
      process.on("message", data => {
        if (data === "graceful-exit") {
          app.quit();
        }
      });
      break;
    case "darwin":
      break;
    default:
      // Others
      process.on("SIGTERM", () => {
        app.quit();
      });
  }
}

// Inject Share
global.share = {
  dev,
  version,
  platform,
  autoUpdater
};
