/**
 * Created by yanghuan on 17/11/12.
 */

import React, { Component } from 'react';
import { render } from 'react-dom';

// Refs 访问在 render 方法中创建的 DOM 节点或 React 元素


// 在 DOM 元素上添加 Ref
// React 组件在加载时将 DOM 元素传入 ref 的回调函数，在卸载时则会传入 null。
// 在 componentDidMount 或 componentDidUpdate 这些生命周期回调之前执行 ref 回调。
class CustomTextInput extends Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = ::this.focusTextInput;
    }

    focusTextInput(){
        this.textInput.current.focus();
    }

    render(){
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

render(<CustomTextInput />, document.getElementById('app'));


// 为 类(Class) 组件添加 Ref
{
    class AutoFocusTextInput extends Component {
        constructor(props){
            super(props);
            this.textInput = React.createRef();
        }

        componentDidMount(){
            this.textInput.current.focusTextInput();
        }

        render(){
            return (
                <CustomTextInput ref={this.textInput} />
            );
        }
    }

    render(<AutoFocusTextInput />, document.getElementById('app2'));
}


// 在函数式组件内部使用 ref 来引用一个 DOM 元素或者 类(class)组件：
// React 更早的发布版
{
    function CustomTextInput3(props){
        // textInput必须在这里声明，所以 ref 回调可以引用它
        let textInput = null;

        function handleClick(){
            textInput.focus();
        }

        return (
            <div>
                <input
                    type="text"
                    ref={(node) =>{
                        // 此处等待DOM挂载后执行的
                        // 回调函数的传参数 => 原生DOM节点
                        return textInput = node;
                    }}
                />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={handleClick}
                />
            </div>
        );
    }

    render(<CustomTextInput3 />, document.getElementById('app3'));
}

// 对父组件暴露 DOM 节点  to do
{

}

// 回调 Refs  better
// 如果 ref 回调以内联函数的方式定义，在更新期间会被调用两次，第一次参数是 null ，之后参数是 DOM 元素。
// 通过将 ref 的回调函数定义成类的绑定函数的方式可以避免上述问题
{
    class CustomTextInput4 extends Component {
        constructor(props){
            super(props);
            this.textInput = null;

            this.setTextInputRef = element =>{
                this.textInput = element;
            };

            this.focusTextInput = () =>{
                this.textInput && this.textInput.focus();
            };
        }

        componentDidMount(){
            // 渲染后文本框自动获得焦点
            this.focusTextInput();
        }

        render(){
            // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
            // 实例上（比如 this.textInput）
            return (
                <div>
                    <input
                        type="text"
                        ref={this.setTextInputRef}
                    />
                    <input
                        type="button"
                        value="Focus the text input"
                        onClick={this.focusTextInput}
                    />
                </div>
            );
        }
    }

    //render(<CustomTextInput4 />, document.getElementById('app4'));
}