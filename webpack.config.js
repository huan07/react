module.exports = {
    entry: {
        //bundle1: './1-JSX.js',
        //bundle2: './2-RenderingElements.js',
        //bundle3: './3-ComponentsAndProps.js',

        //bundle4: './4-StateAndLifecycle.js',
        //bundle4_2:'./4_2-faq-ajax.js',
        //bundle4_3:'./4_3-faq-state.js',
        //bundle4_4: './4_4-lifecycle-mount.js',
        bundle4_5: './4_5-lifecycle-update.js',


        //bundle5: './5-HandlingEvents.js',
        //bundle5_2: './5_2-faq-functions.js',
        //bundle5_2_2: './5_2_2-faq-functions.js',


        //bundle6: './6-ConditionalRendering.js',
        //bundle7: './7-ListsAndKeys.js',
        //bundle8: './8-ControlledComponents.js',
        //bundle8_2: './8-2-UncontrolledComponents.js',
        //bundle9: './9-LiftingStateUp.js',
        //bundle10: './10-CompositionVsInheritance.js'


        //bundle13: './13-context',
        //bundle14: './14-ErrorBoundaries',
        //bundle15: './15-ForwardingRefs',
        //bundle16: './16-Fragments',
        //bundle17: './17-HigherOrderComponents',
        //bundle18: './18-Integrating',
        //bundle19: './19-JSXInDepth.js',
        //bundle20: './20-OptimizingPerformance',

        //bundle12: './12-RefsAndTheDom.js',
        //bundle14_: './14_-Reconciliation',


    },
    output: {
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}