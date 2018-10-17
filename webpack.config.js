const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var config = {
    entry: {
        //JSX: './src/JSX.js', // x
        //RenderingElements: './src/RenderingElements.js', // x

        //ConditionalRendering: './src/ConditionalRendering.js',

        //ForwardingRefs: './src/ForwardingRefs.js',
        //Reconciliation: './src/Reconciliation.js',
        //RefsAndTheDom: './src/RefsAndTheDom.js',


        // // //


        //ComponentsAndProps:'./src/ComponentsAndProps.js', // x
        //StateAndLifecycle: './src/StateAndLifecycle.js', // x
        //FaqState: './src/SAL_FaqState.js', // x
        //FaqAjax: './src/SAL_FaqAjax.js', // x to do json error
        //LifecycleMount:'./src/SAL_LifecycleMount.js', // x
        //LifecycleUpdate: './src/SAL_LifecycleUpdate.js', // x
        //OptimizingPerformance:'./src/OptimizingPerformance_shouldComponentUpdate.js', // x
        //OP_Immutable: './src/OP_Immutable.js', // x to add examples
        ListsAndKeys: './src/ListsAndKeys.js', // x


        //HandlingEvents: './src/HandlingEvents.js',
        //SyntheticEvent:'./src/SyntheticEvent.js',
        //SyntheticEvent2: './src/SyntheticEvent2.js',
        //FaqFunctions:'./src/FaqFunctions.js',
        //FaqFunctions2:'./src/FaqFunctions2.js',


        //Context:'./src/Context',
        //Context2: './src/Context2',
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
    devtool: 'eval',

    devServer: {
        contentBase: './dist',
        hot: true
    }
};

module.exports = config;