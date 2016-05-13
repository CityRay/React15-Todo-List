var webpack = require('webpack'),
    path = require("path");

module.exports = {
    devtool: 'inline-source-map',
    debug: true,
    stats: {
        colors: true,
        reasons: true
    },
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: "eslint-loader",
                exclude: /(node_modules|bower_components)/
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
