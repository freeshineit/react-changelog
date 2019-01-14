const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.config.base');
module.exports = merge(
    webpackBase,
    {
        output: {
            filename: 'app.js',
            publicPath: '/',
        },
        devServer: {
            contentBase: './build',
            hot: true,
            historyApiFallback: true, // 单页面需要注意
            proxy: {} // 代理配置
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "ts-loader"
                        },
                        {
                            loader: 'tslint-loader'
                        }
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({ // `extract-text-webpack-plugin` 提取文本的插件 注意webpack4要是使用`extract-text-webpack-plugin@next`这个版本 （2018-12-15）
                        fallback: "style-loader",
                        use: ['css-loader', 'postcss-loader', 'less-loader']
                    })
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]',
                        }
                    }]
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebPackPlugin({ // html模版
                template: "./public/index.html",
                filename: "index.html",
            }),
            new ExtractTextPlugin({
                filename: 'app.css'
            })
        ]
    }
)