const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "./src/assets/styles/variable.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles'))
      .set('@', path.join(__dirname, './src/'));
  },
};
