const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './1.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react',
            },
        ],
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/1.html'
        }),
    ]
};
