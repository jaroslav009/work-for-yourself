var path = require('path');
 
module.exports = {
    devServer: {
        inline: true,
        contentBase: './',
        port: 3000
    },
  entry: "./app/app.jsx", // входная точка - исходный файл
  output:{
      path: path.resolve(__dirname, './views/js'),     // путь к каталогу выходных файлов - папка public
      publicPath: '/views/js/',
      filename: "bundle.js"       // название создаваемого файла
  },
  module:{
      rules:[   //загрузчик для js
          {
              test: /\.jsx?$/, // определяем тип файлов
              exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
              loader: "babel-loader",   // определяем загрузчик
              query: {
                presets: ["react", "env"]    // используемые плагины
              }
          }
      ]
  },
  watch: true
}