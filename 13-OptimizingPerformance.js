/**
 * Created by yanghuan on 17/11/22.
 */

import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';

function shouldComponentUpdate(nextProps, nextState) {
    return true; // react default
}

class OptimisePerformance1 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    shouldComponentUpdate(nextProps, nextState) {  // 组件仅当 props.color 或 state.count 发生改变时需要更新！！！！！！！！
        if (this.props.color !== nextProps.color) {
            return true;
        }
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <button
                onClick={() => this.setState(state => ({ count: state.count + 1 }))}
            >
                count: { `${ this.state.count} color:${this.props.color}`}
            </button>
        )
    }
}

class OptimisePerformance2 extends PureComponent { // PureComponent会做浅比较 替换 OptimisePerformance1优化性能方式 ！！！！！
    // 不需要自己写shouldComponentUpdate
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    render() {
        return (
            <button
                onClick={() => this.setState(state => ({ count: state.count + 1 }))}
            >
                count: { `${ this.state.count} color:${this.props.color}`}
            </button>
        )
    }
}

const element = (
    <div>
        <OptimisePerformance1 color="red" />
        <OptimisePerformance2 color="green" />
    </div>
);

render(
    element
    , document.getElementById('app')
);