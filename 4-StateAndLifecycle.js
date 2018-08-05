/**
 * Created by yanghuan on 17/7/15.
 */

import React, { PureComponent } from 'react';
import { render } from 'react-dom';

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
        // a. 唯一可以分配this.state的地方；
        // 其它地方需要this.setState({})
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

    render(){
        return (
            <div>
                <h1>Hello,world1</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

render(
    (<div>
        <Clock2 />
    </div>)
    ,
    document.getElementById('app2')
);


// 错误
this.setState({
    counter: this.state.counter + this.props.increment,
    // b.this.props 和 this.state 可能是异步更新的，你不能依赖他们的值计算下一个state(状态)
});

// 解决方式一：传入回调函数
this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
}));

// 解决方式二：第二个参数传入函数，依赖第一个参数的执行结果
// setState 的第二个参数可以传一个回调函数，在 setState 生效之后调用 后面的操作依赖setState的执行结果


// c.为了优化性能，有可能会将多个 setState() 调用合并为一次更新，浅合并！！
// 参照40-Summary-AsyncStateProps.js


// d.数据向下流动，单向数据流
// state被称为 本地状态 或 封装状态的，不能被以外的任何组件访问。
// 向下传递作为子组件的props