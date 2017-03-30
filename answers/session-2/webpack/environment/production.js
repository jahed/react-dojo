const webpack = require('webpack')

module.exports = function production() {
    return {
        id: 'production',
        postPlugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    screw_ie8: true,
                    warnings: false
                }
            })
        ],
        bail: true,
        devtool: 'nosources-source-map'
    }
}