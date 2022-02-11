const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const config = {
        entry: {
            app: ['./src/index.js']
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        }
    }

    if(options.mode === 'development') {
        console.log('dev')
        config.plugins = [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'index.html')
            })
        ];

        config.devtool = 'inline-source-map';

        config.devServer = {
            hot: true, 
            host: '0.0.0.0',
            contentBase: './dist', 
            stats: {
                color: true
            }
        };
    } else {
        console.log('prod')
    }

    return config;
}