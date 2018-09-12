const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var config = {
    entry: {
        //JSX: './src/JSX.js',
        //RenderingElements: './src/RenderingElements.js',
        //ComponentsAndProps:'./src/ComponentsAndProps.js',
        //StateAndLifecycle:'./src/StateAndLifecycle.js',
        //HandlingEvents: './src/HandlingEvents.js',
        ConditionalRendering: './src/ConditionalRendering.js',


        //FaqState:'./src/SAL_FaqState.js',
        //FaqAjax: './src/SAL_FaqAjax.js',
        //LifecycleMount:'./src/SAL_LifecycleMount.js',
        //LifecycleUpdate:'./src/SAL_LifecycleUpdate.js',


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
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'output management',
            template: 'index.html',
            //filename: `html/index.html`,
            hash: true,
            inject: 'body',
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;