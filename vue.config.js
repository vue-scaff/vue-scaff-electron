// Use Path
const path = require("path");

// Get Injection
const { title, updateUrl } = require("./injection.json");

// Globally Rem
const cssPx2rem = require("postcss-plugin-px2rem");

// Use Rem
const px2rem = cssPx2rem({
  // remUnit: 32 //基准大小 baseSize，需要和rem.js中相同

  // - Transfer Pixel
  rootValue: 10,
  // - Decimal 10
  // unitPrecision: 5,
  // - White List
  // propWhiteList: [],
  // - Black List
  // propBlackList: [],
  // - Exclude File
  exclude: /node_module/,
  // - Retain Class
  selectorBlackList: [":root", "html", "body"],
  // - Ignore Class
  ignoreIdentifier: false,
  // - Replace Rules
  // replace: true,
  // - Transfer in Media Screen
  mediaQuery: false,
  // - Mix Pixel to Transfer
  minPixelValue: 0
});

// Resolve Path
const resolve = dir => path.join(__dirname, dir);

// Exports
module.exports = {
  // publicPath is be set in `injection`
  publicPath: process.injection.publicPath,
  productionSourceMap: false,
  lintOnSave: true,
  // Lan Access
  devServer: {
    host: "0.0.0.0"
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [px2rem]
      },
      sass: {
        prependData: `
          @import "@/sheet/variables.scss";
        `
      }
    }
  },
  transpileDependencies: [],
  configureWebpack: {
    name: title,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // 项目名称
        productName: title,
        // App Id
        appId: "com.richbays.mac",
        // 加密
        asar: true,
        // NsIs
        nsis: {
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true,
          createDesktopShortcut: true,
          runAfterFinish: true,
          installerIcon: "public/favicon.ico",
          installerSidebar: "public/favicon.png",
          uninstallerIcon: "public/favicon.ico",
          installerHeaderIcon: "public/favicon.ico",
          createStartMenuShortcut: true,
          shortcutName: title,
          artifactName: "${productName}-${version}-${os}.${ext}"
        },
        // 发布配置
        publish: [
          {
            provider: "generic",
            // 版本（最新）
            channel: "latest",
            // 更新服务器地址（不可为空） -- Not Work
            url: updateUrl
          }
        ],
        // Mac 配置
        mac: {
          icon: "public/favicon.png",
          target: ["default"]
        },
        // Win 配置
        win: {
          verifyUpdateCodeSignature: false,
          icon: "public/favicon.ico",
          target: [
            {
              target: "nsis"
            }
          ]
        },

        extends: null
      }
    }
  }
};
