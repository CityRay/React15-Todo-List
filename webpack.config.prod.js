var webpack = require('webpack'),
    path = require("path"),
    // Strip console.log or console.warn
    WebpackStrip = require('strip-loader');

module.exports = {
    entry: './client/client.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.js$/,
                loader: WebpackStrip.loader('debug', 'console.log', 'console.warn'),
                exclude: /(node_modules|bower_components)/,
            }
        ]
    },
    // externals: {
    //     // don't bundle the 'react' npm package with our bundle.js
    //     // but get it from a global 'React' variable
    //     'react': 'React'
    // },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console:true
            },
            comments: false,
            mangle: true,
            minimize: true
        })
    ]
}
