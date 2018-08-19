/**
 * Created by yanghuan on 18/8/6.
 */
import React, { PureComponent }from 'react';
import { render } from 'react-dom';

// 仅有类组件可以成为错误边界，类组件具备生命周期。
// 错误边界(Error Boundaries) 仅可以捕获其子组件的错误。错误边界无法捕获其自身的错误。
// 在 子组件树 的任何位置捕获 JavaScript 错误，记录这些错误，并显示一个备用 UI ，而不是使整个组件树崩溃。
// 无法 捕获事件处理器内部的错误(用try/catch)

{
    class ErrorBoundary extends PureComponent {
        constructor(props){
            super(props);
            this.state = { hasError: false };
        }

        componentDidCatch(error, errorInfo){
            this.setState({ hasError: true });
            console.error(error, errorInfo.componentStack);
        }

        render(){
            if (this.state.hasError) {
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
}


{
    class ErrorBoundary2 extends React.Component {
        constructor(props){
            super(props);
            this.state = { error: null, errorInfo: null };
        }

        componentDidCatch(error, errorInfo){
            this.setState({
                error,
                errorInfo,
            });
        }

        render(){
            if (this.state.errorInfo) {
                return (
                    <div>
                        <h2>Something went wrong.</h2>
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.error && this.state.error.toString()}
                            <hr />
                            <hr />
                            {this.state.errorInfo.componentStack}
                        </details>
                    </div>
                );
            }
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
                })
            );
        }

        render(){
            if (this.state.counter === 2) {
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
                <hr />
                <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not
                    affected.</p>
                <ErrorBoundary2>
                    <BuggyCounter />
                </ErrorBoundary2>
                <ErrorBoundary2>
                    <BuggyCounter />
                </ErrorBoundary2>
            </div>
        );
    }

    render(
        <App />,
        document.getElementById('app2')
    );
}
