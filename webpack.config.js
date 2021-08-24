const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssOptimizePlugin = require('optimize-css-assets-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')

const DevMode = process.env.NODE_ENV === 'development'

const ProdMode = !DevMode

const optimization = () => {
  config = {
    splitChunks: {
      chunks: 'all',
    },
  }
  if (ProdMode) {
    config.minimizer = [new CssOptimizePlugin(), new TerserPlugin()]
  }
  return config
}

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, './src/index.jsx')],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.css', '.jsx', '.png'],
    // alias: {
    //   '@models': path.resolve(__dirname, 'src/models'),
    //   '@': path.resolve(__dirname, 'src '),
    // },
  },
  devServer: {
    hotOnly: true,
    open: true,
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      favicon: './src/images/Lesh.ico',
      filename: 'index.html',
      minify: {
        collapseWhitespace: ProdMode,
      },
    }),
    new CleanWebpackPlugin(),
    DevMode && new ESLintPlugin({ extensions: ['js', 'jsx'] }),
    DevMode && new webpack.HotModuleReplacementPlugin(),
    DevMode && new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: ProdMode ? 'styles-[contenthash].css' : 'styles.css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      { test: /\.xml$/, use: ['xml-loader'] },
      { test: /\.svg$/, loader: 'svg-react-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: /\.(png|jpg|gif|ico)$/, use: ['file-loader'] },
    ],
  },

  optimization: optimization(),
}
