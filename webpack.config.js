const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
const path = require('path')

const eslintPluginOptions = {
  context: path.resolve(__dirname, 'src'),
  extensions: 'ts'
}

const mode = process.env.NODE_ENV || 'production'

module.exports = {
  devtool: mode === 'development' ? 'inline-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src'),
  externals: [nodeExternals()],
  mode,
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /(dist|node_modules)/,
        use: [{ loader: 'babel-loader'}],
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Dotenv(),
    new ESLintPlugin(eslintPluginOptions),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new NodemonPlugin()
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
    extensions: ['.ts'],
  },
  target: 'node'
}
