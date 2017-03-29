module.exports = function development({ sourceRoot, outputRoot }) {
    return {
        id: 'development',
        devtool: 'inline-source-map',
        devServer: {
            host: '127.0.0.1',
            port: 8080,
            contentBase: outputRoot,
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
}