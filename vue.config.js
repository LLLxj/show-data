const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  // productionSourceMap: !isProduction,
  productionSourceMap: false,
  devServer: {
    open: true,
    hotOnly: true,
    proxy: {
      '/apiPro': {
        target: process.env.VUE_APP_HOST,
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/apiPro': ''
        }
      },
      '/spiderPro': {
        target: process.env.VUE_APP_SPIDER_HOST,
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/spiderPro': ''
        }
      }
    }
  },
  chainWebpack: config => {
    // config.resolve.symlinks(true) // 修复热更新失效
    // config.plugin('html')
    //   .tap(args => {
    //     // args[0].cdn = isProduction ? proCDN : devCDN
    //     args[0].cdn = proCDN
    //     return args
    //   })
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.resolve.alias.set('@', resolve('src'))
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  configureWebpack: config => {
    config.output.chunkFilename = `js/chunk-[contenthash:8].js` // 这种方式适合设备缓存不严重的
    // config.output.chunkFilename = 'js/[name].js?v=' + Version // 这种是给打包后的chunk文件加版本号。
    // if (isProduction) {
    // 用cdn方式引入
    config.externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      'element-ui': 'ELEMENT',
      echarts: 'echarts'
    }
    config.plugins.push(
      new CompressionPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    )
    // config.plugins = [
    //   new CompressionWebpackPlugin({
    //     algorithm: 'gzip',
    //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //     threshold: 10240,
    //     minRatio: 0.8
    //   }),
    //   new webpack.optimize.LimitChunkCountPlugin({
    //     maxChunks: 5,
    //     minChunkSize: 100
    //   })
    // ]
  },
  css: {
    // 向预处理器 Loader 传递选项
    loaderOptions: {
      scss: {
      // 全局变量
      //   prependData: `
      //   @import "~@/assets/css/index.less";
      // `
        prependData: `
        @import '.@/assets/css/index.less';
      `
      },
      postcss: {
        plugins: [
          require('autoprefixer')({
            // browsers: ['last 2 versions']
            overrideBrowserslist: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8']
          })
        ]
      }
    },
    // css 生成名称默认配置
    extract: {
      filename: `css/chunk-[contenthash:8].css`,
      chunkFilename: `css/chunk-[contenthash:8].css`
    }
  },
  // 文件名称不需要hash
  filenameHashing: false,
  transpileDependencies: [
    // 'element-ui',
    // 'vuetify'
  ]
}
