/**
 * Created by githop on 9/6/16.
 */

const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        {test: /.ts$/, loader: 'ts-loader', exclude: /node_modules/}
      ]
    },
    plugins: [
      // new webpack.ProvidePlugin({
      //   '$d3': 'd3'
      // }),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
        hash: false
      }),
      env.prod ? new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: module => /node_modules/.test(module.resource)
      }) : undefined
    ].filter(p => !!p)
  };
};