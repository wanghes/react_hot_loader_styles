var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: [
     'react-hot-loader/patch', //react 局部刷新功能
       'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
    './app/components/app.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath:"/",
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  devServer:{
    host:"localhost",
    port:"8080",
    hot:true,
    inline:true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),HTMLWebpackPluginConfig]
};

