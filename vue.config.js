const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'm.imooctest.com',
    port: 80,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: false,
        ws: false
      }
    }
  }
})
