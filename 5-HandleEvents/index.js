/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';

// 1.使用驼峰命名，而不是全部小写
// 2.通过JSX，传递一个函数作为事件处理程序，而不是一个字符串
// 3.阻止默认行为，必须调用preventDefault，不能通过return false;
// 4.当元素被初始渲染的时候提供一个监听器＝》在构造函数上bind(this);

function ActionLink() {
    function handleClick(e) { //不用担心 跨浏览器的兼容性问题 e
        e.preventDefault();
        console.log('This link was clicked');
    }

    return (
        <a href="http://www.baidu.com" onClick={handleClick}>
            Click me but will be prevented use e.preventDefault()
        </a>
    )
}

//render(<ActionLink />, document.getElementById('app'))

class Toggle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { isToggleOn: true, };

        // 这个绑定是必要的，使`this`在回调中起作用 code better code better
        this.handleClick = this.handleClick.bind(this);
        // or
        //this.handleClick=::this.handleClick;
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    handleClick2() {/*每次渲染时都创建一个不同的回调，在多数情况下，没什么问题。*/
        /*如果这个回调被作为 prop(属性) 传递给下级组件，这些下级组件可能需要额外的重复渲染*/
        /*会有性能问题*/
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    render() {
        return (
            <div>
                <button key="1" type="button" onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

                <button key="2" type="button" onClick={() => this.handleClick2()}>
                    {this.state.isToggleOn ? 'ON handleClick2' : 'OFF handleClick2'}
                </button>
            </div>
        );
    }
}

render(<Toggle />, document.getElementById('app'));


