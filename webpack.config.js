module.exports = {
    entry: {
        //bundle1: './1-JSX.js',
        //bundle2: './2-RenderingElements.js',
        //bundle3: './3-ComponentsAndProps.js',
        bundle4: './4-StateAndLifecycle.js',
        //bundle5: './5-HandlingEvents.js',
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

        //bundle40: './40-Summary-AsyncStateProps.js',
        //bundle41: './41-Summary-LifecycleState.js',
        //bundle42: './42-Summary-LifecycleState.js',
        //bundle43: './43-Summary-LifecycleProps.js',

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