const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname),
    filename: '[name].js'
  },
  target: 'node',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
};
