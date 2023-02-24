// 指定入口文件为 ./src/index.tsx，输出文件为 dist/bundle.js。
// 使用 ts-loader 处理 .ts 和 .tsx 文件。
// 使用 style-loader、css-loader 和 less-loader 处理 .less 文件。
// 使用 html-webpack-plugin 生成 HTML 文件，使用 public/index.html 作为模板。
// 配置开发服务器，监听端口为 9000，并将 dist 目录作为静态文件目录。
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
