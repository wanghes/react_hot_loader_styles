var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
var HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
var NoEmitOnErrorsPlugin = new webpack.NoEmitOnErrorsPlugin();

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch', //react 局部刷新功能
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/components/app.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/static/',
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig, HotModuleReplacementPlugin, NoEmitOnErrorsPlugin]
};
