const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.san', '.json']
  },
  module: {
    rules: [
      {
        test: /\.san$/,
        use: 'san-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}