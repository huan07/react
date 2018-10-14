/**
 * Created by yanghuan on 17/7/15.
 */

import React, { PureComponent } from 'react';
import { render } from 'react-dom';

// 1.使用驼峰命名，而不是全部小写
// 2.通过JSX，传递一个函数作为事件处理程序，而不是一个字符串
// 3.当元素被初始渲染的时候提供一个监听器 => 在构造函数上bind(this);

function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        // 必须明确调用 preventDefault
        // e 是一个合成的事件
        alert('This link was clicked');
    }

    return (
        <a href="http://www.baidu.com" onClick={handleClick}>
            Click me but will be prevented use e.preventDefault()
        </a>
    );
}

render(<ActionLink />, document.getElementById('app'));

//
class Toggle extends PureComponent {
    constructor(props, context){
        super(props, context);
        this.state = { isToggleOn: true };

        // 这个绑定是必要的，使`this`在回调中起作用！！ code better
        this.handleClick = ::this.handleClick;
        //this.handleClick = this.handleClick.bind(this);
    }

    changed(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    handleClick(){ // 回调函数方法1 better code
        this.changed();
    }


    handleClick2 = () =>{ // 回调函数方法2   被解析到constructor函数内部，作为实例方法
        // 类属性
        this.changed();
    };

    handleClick3(named, e){ // 回调函数方法3，
        // bind方式，e 作为最后一个参数默认被传递

        // 触发render，创建一个不同的回调函数，传递给子组件，
        // 子组件componentWillReceiveProps, 触发子组件render, 导致性能问题

        console.log(named, e, e.target);
        this.changed();
    }

    render(){
        const { isToggleOn } = this.state;
        return (
            <div>
                <button key="1" onClick={this.handleClick}>
                    {isToggleOn ? 'ON' : 'OFF'}
                </button>
                <br /><br />

                <button key="2" onClick={this.handleClick2}>
                    {isToggleOn ? 'ON' : 'OFF '} {'handleClick2'}
                </button>
                <br /><br />


                <button key="3" onClick={(e) => this.handleClick3('传参数', e)}>
                    {isToggleOn ? 'ON' : 'OFF'} {'handleClick3 x'}
                </button>
                <br />

                <button key="4" onClick={this.handleClick3.bind(this, '传参数')}>
                    {isToggleOn ? 'ON' : 'OFF '} {'handleClick3 x e 作为参数默认被传递'}
                </button>
            </div>
        );
    }
}

render(<Toggle />, document.getElementById('app2'));