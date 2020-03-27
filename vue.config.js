module.exports = {
    //...其他配置
  css: {
   loaderOptions: {
    postcss: {
     plugins: [
      require('postcss-pxtorem')({
       rootValue: 37.5,
       minPixelValue: 2,
       propList: ['*'
                        ],
                    })
                ]
            }
        }
    },
    runtimeCompiler: true,
    publicPath: './', // 设置打包文件相对路径
    devServer: {
        port: 8080,
        // open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'https://easy-mock.com/mock/5e7380fbc22f1e7cecdc39f7/example', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}