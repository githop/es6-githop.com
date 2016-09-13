/**
 * Created by githop on 9/6/16.
 */

const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = env => {
  return {
    entry: {
      app: resolve(__dirname, 'client/githop/githop.module.ts')
    },
    output: {
      filename: '[name].bundle.js',
      path: resolve(__dirname, 'dist')
      // pathinfo: true
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    context: resolve(__dirname, 'client'),
    devtool: 'cheap-source-map',
    module: {
      loaders: [
        {test: require.resolve('angular'), loader: 'exports?window.angular'},
        {test: /\.html$/, loader: 'html'},
        {test: /.ts$/, loader: 'ts-loader', exclude: /node_modules/},
        {test: /\.scss$/, loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css', 'sass']
        })},
        {test: /\.css$/, loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })}
      ]
    },
    plugins: [
      // new webpack.ProvidePlugin({
      //   angular: 'angular',
      // }),
      new ExtractTextPlugin({
        filename: 'style.css',
        allChunks: false
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
        hash: false
      })
    ]
  };
};