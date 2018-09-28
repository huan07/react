const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var config = {
    entry: {
        //JSX: './src/JSX.js', x
        //RenderingElements: './src/RenderingElements.js', x
        //ComponentsAndProps:'./src/ComponentsAndProps.js', x
        //StateAndLifecycle:'./src/StateAndLifecycle.js', x
        //HandlingEvents: './src/HandlingEvents.js', x
        //ConditionalRendering: './src/ConditionalRendering.js', x


        //LifecycleMount:'./src/SAL_LifecycleMount.js',
        //LifecycleUpdate:'./src/SAL_LifecycleUpdate.js',


        //ForwardingRefs: './src/ForwardingRefs.js', // ?
        //Reconciliation: './src/Reconciliation.js',
        //RefsAndTheDom: './src/RefsAndTheDom.js',
        //OptimizingPerformance:'./src/OptimizingPerformance.js',
        //OP_Immutable:'./src/OP_Immutable.js',


        //SyntheticEvent:'./src/SyntheticEvent.js',
        //SyntheticEvent2: './src/SyntheticEvent2.js',


        //
        //x FaqAjax: './src/SAL_FaqAjax.js',
        //x FaqFunctions:'./src/FaqFunctions.js',
        //x FaqFunctions2:'./src/FaqFunctions2.js',
        FaqState: './src/SAL_FaqState.js',
    },
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

    mode: 'development',
    devtool: 'eval-source-map',

    devServer: {
        contentBase: './dist',
        hot: true
    }
};

module.exports = config;