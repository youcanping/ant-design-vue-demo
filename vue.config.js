const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 'primary-color': '#ff6700'
            // 'link-color': '#1DA57A',
            // 'border-radius-base': '2px',
            hack: `true; @import "${resolve('./src/assets/less/theme.less')}";`
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
