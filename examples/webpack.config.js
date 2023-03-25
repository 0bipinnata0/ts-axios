const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir)
    if (fs.statSync(fullDir).isDirectory()) {
      const entry = path.join(fullDir, 'app.ts')

      if (fs.existsSync(entry)) {
        entries[dir] = ['webpack-hot-middleware/client', entry]
      }
    }
    return entries
  }, {}),
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new ESLintWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}