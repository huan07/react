import React from 'react';
import { render, } from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { countAsync: 0, count: 0 };
        this.handleIncreaseCountAsync = this.handleIncreaseCountAsync.bind(this);
        this.handleIncreaseCount = this.handleIncreaseCount.bind(this);
    }

    handleIncreaseCountAsync() {
        this.setState((prevState, props) => {
            return { countAsync: prevState.countAsync + 1 };
        });
        this.setState((prevState, props) => {
            return { countAsync: prevState.countAsync + 1 };
        });
    }

    handleIncreaseCount() {
        this.setState({
            /*  this.setState是异步的，多次调用，会合并为一次更新  */
            count: this.state.count + 1,
        });
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <div>
                <h3>{this.state.countAsync}</h3>
                <input type="button" value="this.state,this.props异步执行" onClick={this.handleIncreaseCountAsync}></input>

                <h3>{this.state.count}</h3>
                <input type="button" value="多次调用合并为一次更新 error" onClick={this.handleIncreaseCount}></input>
            </div>
        )
    }
}

render(
    <Counter increment={11} />
    , document.getElementById('app')
);