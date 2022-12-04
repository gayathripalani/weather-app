const path = require('path');
const webpackConfig = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () =>
  merge(baseConfig, {
    mode: 'development',
    entry: './src/index.tsx',

    output: {
      publicPath: '/',
    },

    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, '/src/index.html'),
      }),
      new webpackConfig.HotModuleReplacementPlugin(),
    ],

    devServer: {
      hot: true,
      historyApiFallback: true,
      port: 3000,
      public: 'localhost',
    },
  });
