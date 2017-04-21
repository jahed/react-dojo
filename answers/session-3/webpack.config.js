const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const sourceRoot = path.resolve('./source')
const outputRoot = path.resolve(`./build`)

const environment = require('./webpack/environment')({
    sourceRoot, outputRoot
})

module.exports = {
    target: 'web',
    context: sourceRoot,
    entry: {
        main: ['./index.jsx']
    },
    output: {
        path: outputRoot,
        publicPath: '/',
        filename: 'javascripts/[name]-[chunkhash].js'
    },
    resolve: {
        alias: {
            '~': sourceRoot
        },
        extensions: [
            '', '.js', '.jsx', '.json'
        ],
        unsafeCache: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { cacheDirectory: true }
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: ['style', `css?root=${sourceRoot}`]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                     `css?root=${sourceRoot}`, 
                     `sass?${JSON.stringify({ includePaths: [sourceRoot] })}`
                ]
            },
            {
                test: /\.(jpg|gif|png|svg|ico)(\?.*)?$/,
                loader: 'file?name=[path][name].[ext]'
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file?name=[path][name].[ext]'
            },
            {
                test: /\.(ogg|wav|mp3)(\?.*)?$/,
                loader: 'file?name=[path][name].[ext]'
            },
        ]
    },
    plugins: (environment.prePlugins || []).concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(environment.id)
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html.ejs',
            inject: 'body'
        })
    ]).concat(environment.postPlugins || []),
    bail: environment.bail,
    devtool: environment.devtool,
    devServer: environment.devServer
}
