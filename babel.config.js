const plugins = [
  [
    'import',
    {
      libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true, css: true
    }
  ]
]
// 非调试模式移除console
if (!process.env.NODE_ENV === 'development') {
  plugins.push('transform-remove-console')
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins
}
