var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    entry: {
        //JSX: './src/JSX.js',
        //RenderingElements: './src/RenderingElements.js',
        //HandlingEvents: './src/HandlingEvents.js',

        //ForwardingRefs: './src/ForwardingRefs.js', // ?
        //Reconciliation: './src/Reconciliation.js',
        //RefsAndTheDom: './src/RefsAndTheDom.js',


        //FaqState:'./src/FaqState.js',
        //FaqAjax:'./src/FaqAjax.js',
        //LifecycleMount:'./src/LifecycleMount.js',
        //LifecycleUpdate:'./src/LifecycleUpdate.js',
        //FaqFunctions:'./src/FaqFunctions.js',
        //FaqFunctions2:'./src/FaqFunctions2.js',


        //SyntheticEvent:'./src/SyntheticEvent.js',
        SyntheticEvent2: './src/SyntheticEvent2.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    //devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: __dirname + "/index.html"
        })
    ]
};

module.exports = config;