var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    entry: {
        //JSX: './src/JSX.js',


        //RenderingElements: './src/RenderingElements.js',


        //ComponentsAndProps:'./src/ComponentsAndProps.js',


        //StateAndLifecycle:'./src/StateAndLifecycle.js',
        //FaqState:'./src/SAL_FaqState.js',
        FaqAjax: './src/SAL_FaqAjax.js',
        //LifecycleMount:'./src/SAL_LifecycleMount.js',
        //LifecycleUpdate:'./src/SAL_LifecycleUpdate.js',


        //HandlingEvents: './src/HandlingEvents.js',
        //ForwardingRefs: './src/ForwardingRefs.js', // ?
        //Reconciliation: './src/Reconciliation.js',
        //RefsAndTheDom: './src/RefsAndTheDom.js',
        //OptimizingPerformance:'./src/OptimizingPerformance.js',
        //OP_Immutable:'./src/OP_Immutable.js',


        //FaqFunctions:'./src/FaqFunctions.js',
        //FaqFunctions2:'./src/FaqFunctions2.js',

        //SyntheticEvent:'./src/SyntheticEvent.js',
        //SyntheticEvent2: './src/SyntheticEvent2.js',
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
    devtool: 'eval',
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