const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  entry: [path.join(PATHS.src, 'index.tsx')],

  output: {
    path: PATHS.build,
  },

  devtool: 'source-map',

  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },

      {
        test: /\.(scss|sass|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|css|eot|ttf)$/,
        loader: 'url-loader',
      },
    ],
  },
};
