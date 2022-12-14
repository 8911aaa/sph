const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': { // 前端在发请求的时候,路径中有/api这样的请求,那么我们的代理服务器就会工作,找我们的http://gmall-h5-api.atguigu.cn这台服务器要数据,因为服务器与服务器之间是没有跨域问题的,而前端是因为有浏览器才有跨域问题的
        target: 'http://gmall-h5-api.atguigu.cn' // 后台服务器
        // pathRewrite: { '^/api': '' }, 这一步是路径重写,因为我们的所有接口已经带/api了,所以路径重写就不需要了
      }
    }
  }

})
