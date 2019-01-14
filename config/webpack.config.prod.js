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
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].[hash:10].js',
            chunkFilename: '[name].[hash:10].js',
            publicPath: '/',
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all'
                    }
                }
            }
        },
        module: {
            rules: [
                {test: /\.tsx?$/, loader: 'ts-loader'},
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
                            name: 'images/[name].[ext]?[hash]',
                        }
                    }]
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({ // html模版
                template: "./public/index.html",
                filename: "index.html",
            }),
            new ExtractTextPlugin({
                filename: '[name].[hash:10].css'
            })
        ]
    }
)