// Import Log
import log from "electron-log";

export default (win, info, name) => {
  // Log
  log.info(info);
  // Traffic
  win.webContents.send(name || "message", info);
};
