/* 
* require() is a Node.js function
* reads a file, executes the file, and returns the 
* exports object
* path is Node.js module that provides utilities
* for working with file and directory paths
*/

/*
* __dirname is the absolute path of the directory
* containing the currently executing file
* path.resolve(__dirname,'dist') finds the path from
* the currently executing file to dist
*
* entry files are resolved relative to the contex
* config property, which is an absolute path
* by default, context is the absolute path to the 
* current working directory of Node.js used
* 
* for output, webpack needs to know exactly where you
* want to the bundles to be emitted
* this cannot be in the context of your application
* so it must be specified by a new absolute path
* 
* webpack requires filename and path to be defined
* separately; output.filename must be a relative path
* and output.path must be an absolute path
*/

/*
* HtmlWebpackPlugin generate an HTML file for your
* application and automatically injects all 
* generated bundles into this file
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
* set configurations
*/

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },

    plugins: [new HtmlWebpackPlugin({
        title: 'Restaurant Page',
    })],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
}