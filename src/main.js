// Service Worker
import "./registerServiceWorker";

// Use Electron
const $electron = window.require("electron");

// Use Global Share
const $share = $electron.remote.getGlobal("share");

// Element UI
import Element from "element-ui";
import "@/sheet/element-theme.scss";
import en from "element-ui/lib/locale/lang/en";

/**
 * Listen Updater Events
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
$electron.ipcRenderer.on("update-error", (e, info) => {
  console.log("报错了", info);
});

$electron.ipcRenderer.on("checking-for-update", (e, info) => {
  console.log("检测更新中", info);
});

$electron.ipcRenderer.on("update-available", (e, info) => {
  console.log("开始更新", info);
  // $share.autoUpdater.downloadUpdate();
});

$electron.ipcRenderer.on("update-not-available", (e, info) => {
  console.log("不能更新，为啥呢？", info);
});

$electron.ipcRenderer.on("download-progress", (e, info) => {
  console.log(`下载进度是：${info.percent}%`, info);
});

$electron.ipcRenderer.on("update-downloaded", (e, info) => {
  console.log("可以进行安装了");
  // $share.autoUpdater.quitAndInstall();
});

$electron.ipcRenderer.on("message", (e, info) => {
  console.log("消息", info);
});

// Export Useage
export default (
  // App
  App,

  // Subscript Face
  { Vue, subscribe },

  // Runner
  next
) => {
  subscribe("util", config => {
    console.log("UTIL MODULE : ", config);
  });

  subscribe("route", config => {
    // Set Mode
    config.mode = "history";

    // Set Base Route
    config.base = process.env.publicPath;

    // Guard
    config.beforeEach = (to, from, next) => {
      // Check Token
      if (sessionStorage.getItem("Admin-Token")) {
        return next();
      }

      // No Token Redirect Login
      to.name === "login" ? next() : next({ name: "login" });
    };
  });

  subscribe("store", (config, model) => {
    config.getters = {
      sidebar: state => state.app.sidebar,
      size: state => state.app.size,
      device: state => state.app.device,
      visitedViews: state => state.tagsView.visitedViews,
      cachedViews: state => state.tagsView.cachedViews,
      token: state => state.user.token,
      avatar: state => state.user.avatar,
      name: state => state.user.name,
      introduction: state => state.user.introduction,
      roles: state => state.user.roles,
      permission_routes: state => state.permission.routes,
      errorLogs: state => state.errorLog.logs
    };

    console.log("STORE !!! : ", config);
  });

  subscribe("component", (config, model) => {
    config.prefix = "x";
  });

  subscribe("request", ({ data, headers }) => {
    data.token = "wechat: ejoenix";
  });

  subscribe("response", config => {
    config.success = ({ data }) => data;
  });

  subscribe("custom", config => {
    return {
      author: "joenix"
    };
  });

  // Use Element-UI
  Vue.use(Element, {
    size: `medium`,
    locale: en
  });

  // Runner
  return next(App);
};
