const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        main: path.resolve(__dirname,'src/index.js'),
        // css: path.resolve(__dirname,'src/styles')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer:{
        static: './dist',
        port: 5001,
        open: true,
        hot: true,
        // watchContentBase: true
    },
    module:{
        rules:[
            //css
            {   test: /\.css$/i , 
                use: ['style-loader','css-loader'],
            },
            //assets
            {   test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
                type:'asset/resource'},
            //babel
            {   test: /\.js$/i,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Vanilla TODO',
            filename: 'index.html',
            template: path.resolve(__dirname,'src/index.html')
        }),
        new CopyPlugin({
            patterns: [
              { from: "**/*.css", to: "styles.css" },
            ],
          })
    ]
}
/*
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module: {
    rules: [
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }
    ]
},
plugins: [
    new ExtractTextPlugin("styles.css")
]
*/