const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
        @import "@/assets/scss/variable.scss";
        @import "@/assets/scss/mixin.scss";
      `
      }
    }
  },
  parallel: true,
  devServer: {
    onAfterSetupMiddleware(devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }
      devServer.app.get('/play/p', function (req, res) {
        res.json({ code: 1000, msg: '成功', data: [] })
      })
    }
  }
})
