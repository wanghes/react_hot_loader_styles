var webpack = require('webpack');
var HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
var NoEmitOnErrorsPlugin = new webpack.NoEmitOnErrorsPlugin();
var NamedModulesPlugin = new webpack.NamedModulesPlugin();

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch', //react 局部刷新功能
        'webpack-hot-middleware/client',
        './app/components/app.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/static/',
        filename: "bundle.js"
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
    plugins: [HotModuleReplacementPlugin, NoEmitOnErrorsPlugin,NamedModulesPlugin]
};
