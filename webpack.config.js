module.exports = {
    entry: {
        //bundle1: './1-JSX.js',
        //bundle2: './2-RenderingElements.js',
        //bundle3: './3-ComponentsAndProps.js',
        //bundle4: './4-StateAndLifecycle.js',
        //bundle5: './5-HandlingEvents.js',
        //bundle6: './6-ConditionalRendering.js',
        //bundle7: './7-ListsAndKeys.js',
        bundle8: './8-ControlledComponents.js',
        //bundle8_2: './8-2-UncontrolledComponents.js',
        //bundle9: './9-LiftingStateUp.js',
        //bundle10: './10-CompositionVsInheritance.js'


        //bundle11: './11-JSXInDepth.js',
        //bundle12: './12-RefsAndTheDom.js',
        //bundle13: './13-OptimizingPerformance',
        //bundle14: './14-Reconciliation',

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