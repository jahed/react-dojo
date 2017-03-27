const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const sourceRoot = path.resolve('./source')
const outputDir = path.resolve(`./build`)

module.exports = {
    target: 'web',
    context: sourceRoot,
    entry: {
        main: ['./index.jsx']
    },
    output: {
        path: outputDir,
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
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
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
                loaders: ['style', `css?root=${sourceRoot}`, "sass"]
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
    plugins: [
        new webpack.DefinePlugin({
            // Replacements for Dependencies
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html.ejs',
            inject: 'body'
        })
    ],
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        contentBase: outputDir,
        historyApiFallback: true,
        stats: {
            context: sourceRoot,
            colors: true,
            warnings: true,
            timings: true,
            reasons: true,
            errors: true,
            errorDetails: true,

            assets: false,
            cached: false,
            children: false,
            version: false,
            hash: false,
            chunks: false,
            chunkModules: false,
            modules: false,
        }
    }
}
