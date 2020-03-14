const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const loremIpsum = require('lorem-ipsum').loremIpsum
const faker = require('faker')
const moment = require('moment')
function htmlPlugins(file) {
  return new HtmlWebpackPlugin({
    template: `./public/${file}.html`,
    inject: true,
    filename: file + '.html',
    templateParameters: { loremIpsum, capitalize, faker, moment }
  })
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        }
      ]
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            esModule: false,
            name: '[name].[ext]',
            outputPath: './fonts/',
            publicPath: './fonts/'
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    htmlPlugins('index'),
    htmlPlugins('about'),
    htmlPlugins('boring'),
    htmlPlugins('superboring'),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};