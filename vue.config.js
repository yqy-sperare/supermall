const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  resolve:{
    alias: {
      'assets':'@/assets',
      'common':'@/common',
      'components':'@/components',
      'network':'@/network',
      'views':'@/views',
    }
  },
  // vue-cli 默认 babel-loader 忽略 node_modules
// 当某个依赖(如 vue-baberrage)存在 ES6 语法时，vue 官方给出的解决方案是 transpileDependencies
  transpileDependencies: true
})
