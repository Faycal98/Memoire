const { defineConfig } = require('@vue/cli-service')
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: tagName => {
            return tagName === 'vue-advanced-chat' || tagName === 'emoji-picker'
          }
        }
      }))


      
        config.plugin('define').tap((definitions) => {
          Object.assign(definitions[0], {
            __VUE_OPTIONS_API__: 'true',
            __VUE_PROD_DEVTOOLS__: 'false',
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
          })
          return definitions
        })
      
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf|jpg|avif)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'files/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  },
  lintOnSave: false,
}