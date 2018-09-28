/**
 * Created by yanghuan on 17/7/15.
 */

import React, { PureComponent } from 'react';
import { render } from 'react-dom';

// state 和 props 类似，但是它是私有的，并且由组件本身完全控制
// 1.
function Clock(props){
    return (
        <div>
            <h1>Hello,world1</h1>
            <h2>It is {props.date.toLocaleTimeString()}</h2>
        </div>
    );
}

function tick(){
    render(<Clock date={new Date()} />, document.getElementById('app'));
}

setInterval(tick, 1000);


// 2. props => state
class Clock2 extends PureComponent {
    constructor(props){
        super(props);
        this.state = { date: new Date() };
        // a. 不要直接修改 state(状态)，不会重新渲染一个组件
        // 唯一可以分配this.state的地方；
        // 其它地方需要this.setState({})
    }

    render(){
        return (
            <div>
                <h1>Hello,world1</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){ // 在组件被销毁时释放所占用的资源
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }
}

render(<Clock2 />, document.getElementById('app2'));

// b.setState 的调用是异步的 - 在调用 setState 之后，不要依赖 this.state 来立即反映新值
// setState() 并不总是立即更新组件。它可能会 批量 或 延迟到后面更新


// c.数据向下流动，单向数据流，向下传递作为子组件的props
// state被称为 本地状态 或 封装状态的，不能被以外的任何组件访问。