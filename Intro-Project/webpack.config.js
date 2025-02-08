const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']  // order is important here! style-loader must be read before css-loader 
      }
    ]
  }
}