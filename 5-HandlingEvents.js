/**
 * Created by yanghuan on 17/7/15.
 */

import React, { PureComponent } from 'react';
import { render } from 'react-dom';

// 1.使用驼峰命名，而不是全部小写
// 2.通过JSX，传递一个函数作为事件处理程序，而不是一个字符串
// 3.当元素被初始渲染的时候提供一个监听器 => 在构造函数上bind(this);

function ActionLink(){
    function handleClick(e){ //
        e.preventDefault();
        // 必须明确调用 preventDefault
        // e 是一个合成的事件
        console.log('This link was clicked');
    }

    return (
        <a href="http://www.baidu.com" onClick={handleClick}>
            Click me but will be prevented use e.preventDefault()
        </a>
    );
}

render(<ActionLink />, document.getElementById('app'));

class Toggle extends PureComponent {
    constructor(props, context){
        super(props, context);
        this.state = { isToggleOn: true, };

        // 这个绑定是必要的，使`this`在回调中起作用！！ code better
        this.handleClick = ::this.handleClick;
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){ // 回调函数方法1 better code
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    handleClick2(){ // 回调函数方法2
        // 每次渲染时都创建一个不同的回调，在多数情况下，没什么问题。
        // 如果这个回调被作为prop传递给下级组件，这些 下级组件 可能需要额外的重复渲染，导致性能问题
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    handleClick3 = () =>{ // 回调函数方法3
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    };

    render(){
        return (
            <div>
                <button key="1" onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <div></div>
                <button key="2" onClick={() => this.handleClick2()}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'} {'handleClick2'}
                </button>
                <div></div>
                <button key="3" onClick={this.handleClick3}>
                    {this.state.isToggleOn ? 'ON' : 'OFF '} {'handleClick3'}
                </button>
            </div>
        );
    }
}

render(<Toggle />, document.getElementById('app2'));


// 将参数传递给事件处理程序 to add