import React, { PureComponent } from 'react';
import { render }from 'react-dom';

class LifecycleState extends PureComponent {

    state = {
        count: 1,
        count2: 11,
    };

    componentWillMount() {
        // 先读取初始state值，
        // 再被调用，若有state被改变，调用这次的state，
        // 然后第一次render ！！！！
        this.setState({
            count: 0,
        });
        console.log('componentWillMount  once');  // setState是异步的，同步先执行，然后去render
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={() => {
                    }}
                >
                    组件第一次挂载前调用，
                </button>
                <span>{this.state.count}</span>

                <div style={{ padding: 30 }}></div>

                <button
                    type="button"
                    onClick={() => {
                    }}
                >
                    组件第一次挂载后调用，
                </button>
                <span>{this.state.count2}</span>
            </div>
        )
    }

    componentDidMount() {
        // 第一次render后被调用 ！！！！ 这个时候可以拿到DOM
        // 若有state的改变才会去render,
        console.log(this.getDOMNode); // ？？？？？？？？？ undefined
        this.setState({  // 不会去 render   react会拿这次的state值和上一次的state比较，有变化才去render
            count: 0,
        });
        console.log('componentDidMount  once');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount  once 可以清除不需要的事件、定时器');
    }
}

const element = (
    <div>
        <LifecycleState />
    </div>
);

render(element, document.getElementById('app'));