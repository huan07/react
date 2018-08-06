/**
 * Created by yanghuan on 18/8/6.
 */
import React, { PureComponent }from 'react';
import { render } from 'react-dom';

// 仅有类组件可以成为错误边界
// 仅可以捕获其子组件的错误

class ErrorBoundary extends PureComponent {
    constructor(props){
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info){
        // Display fallback UI
        this.setState({ hasError: true });

        //logErrorToMyService(error, info);
        console.error(error, info.componentStack);
    }

    render(){
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

render((
        <ErrorBoundary>
            <div>xxx</div>
        </ErrorBoundary>
    ), document.getElementById('app')
);


class ErrorBoundary2 extends React.Component {
    constructor(props){
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo){
        // Catch errors in any components below and re-render with error message
        this.setState({
            error,
            errorInfo,
        });
        // You can also log error messages to an error reporting service here
    }

    render(){
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

class BuggyCounter extends PureComponent {
    constructor(props){
        super(props);
        this.state = { counter: 0 };
        this.handleClick = ::this.handleClick;
    }

    handleClick(){
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render(){
        if (this.state.counter === 3) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <button onClick={this.handleClick}>{this.state.counter}</button>;
    }
}

function App(){
    return (
        <div>
            <ErrorBoundary2>
                <p>These two counters are inside the same error boundary. If one crashes, the error boundary will
                    replace both of them.</p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary2>
            <hr />
            <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not
                affected.</p>
            <ErrorBoundary2><BuggyCounter /></ErrorBoundary2>
            <ErrorBoundary2><BuggyCounter /></ErrorBoundary2>
        </div>
    );
}

render(
    <App />,
    document.getElementById('app2')
);
