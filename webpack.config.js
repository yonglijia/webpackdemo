var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: {
        index :__dirname+"/app/index.js",
        testReact:__dirname+"/app/testReact.jsx",
    },
    output: {
        publicPath:'/xxx/',
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "js/[name].js"//打包后输出文件的文件名
    },
    devtool: "source-map",
    module: {
        rules: [
            {test: /\.css$/, loaders: ["style-loader", "css-loader"]},
            {test: /\.(?:jpg|gif|png)$/, loader: 'url-loader?limit=10240&name=images/[name]-[hash:10].[ext]'},
            {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin(),
    ],
};
