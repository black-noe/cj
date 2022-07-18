const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  assetsDir: "cj",
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  configureWebpack: config => {
    Object.assign(config.resolve.alias, {
      "@utils": resolve("src/utils"),
      "@api": resolve("src/api"),
      "@components": resolve("src/components"),
      "@assets": resolve("src/assets"),
      "@css": resolve("src/assets/css"),
      "@images": resolve("src/assets/images"),
      "@views": resolve("src/views"),
    });
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].VUE_APP_NAME = process.env.VUE_APP_NAME;
      return args;
    });
  }, 
  chainWebpack: config => {
    config.module
      .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
          .loader('px2rem-loader')
          .options({
            remUnit: 75
          })
  }
}
