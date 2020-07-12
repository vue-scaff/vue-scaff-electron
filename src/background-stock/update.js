// Import Updater
import { AppUpdater, AppImageUpdater, autoUpdater } from "electron-updater";

// Import Log
import log from "electron-log";

// Injection
import { debug } from "../../injection.json";

// Traffic
import traffic from "./traffic";

// Classic
class Updater {
  constructor() {
    // autoUpdater.checkForUpdatesAndNotify();
  }
}

/**
 * Auto Updater Events
 * ======== ======== ========
 * uri: https://www.electronjs.org/docs/api/auto-updater
 *
 * error
 * checking-for-update
 * update-available
 * update-not-available
 * download-progress
 * update-downloaded
 * ======== ======== ========
 */
export default events => {
  // Set Debugger Logger
  autoUpdater.logger = log;
  autoUpdater.logger.transports.file.level = debug ? "debug" : "info";

  // Set Events Callback
  Object.keys(events).forEach(name => {
    // Listener
    autoUpdater.on(name, (e, info) => events[name](autoUpdater, e, info));
  });

  // Return
  return autoUpdater;
};
