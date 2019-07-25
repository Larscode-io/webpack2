const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        writeToDisk: true,
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000,
        watchContentBase: true
    },
    module: {
        rules: [
          {
                  test: /\.(png|jpe?g|gif)$/,
                  use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                      },
                    },
                  ],
                },            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'stage-0' ]
                    }
                }
            },
            {
                test: /\.pug$/,
                use: [
                    'pug-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello DEV world',
            description: 'Hello world',
            template: 'src/page-template2.pug'
        })
    ]
};
