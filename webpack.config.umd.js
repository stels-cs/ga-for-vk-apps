var path = require('path');
var webpack = require('webpack');
var argv = require('yargs').argv;
var minify = Boolean(argv.minify);
var outputName = 'ga-for-vk-apps';
var plugins = {
    minify: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            mangle: false
        })
    ]
}

module.exports = {
    devtool: (minify) ? 'source-map' : null,
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist/umd'),
        filename: (minify) ? outputName + '.min.js' : outputName + '.js',
        library: 'GaForVkApps',
        libraryTarget: 'umd'
    },
    plugins: (minify) ? plugins.minify : plugins.default,
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            }
        ]
    }
}