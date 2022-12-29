const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry:path.resolve(__dirname, 'index.js') ,// путь к нашему файлу через модуль path
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true, // благодаря ключу наш файл будет очищаться
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080, // значение нашего порта
    open: true, // сайт будет запускаться авт. после start 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),// путь к нашему HTML файлу 
    })
  ],
  module: { // настройка babel loader
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  }
};