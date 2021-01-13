const path = require('path')

module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-typescript'],
    [
      'module-resolver',
      {
        alias: { '@': path.resolve(__dirname, 'src') },
        root: path.resolve(__dirname, 'src')
      }
    ]
  ],
  presets: [
    '@babel/typescript',
    ['@babel/env', { targets: { node: true } }]
  ]
}
