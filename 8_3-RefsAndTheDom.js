/**
 * Created by yanghuan on 17/11/12.
 */

import React, { PureComponent } from 'react';
import { render } from 'react-dom';

// ref属性接受回调函数 组件装载，卸载之后，回调函数会立即执行

// 1.DOM元素上添加ref
// 组件装载(mount)时，用 DOM 元素作为参数回调 ref 函数，
// 在组件卸载(unmounts)时，使用 null 作为参数回调函数

// 2.类
// ref回调函数接受的参数是装载的 组件实例 to_add example

// 3.函数式组件 内部引用DOM元素、类组件

// 4.对父组件暴露DOM节点 允许父代通过中间件将ref回调给子代的DOM节点 适用于类组件、函数式组件

// 5. 无法控制子组件，最后使用findDOMNode()

// 但是state更为清晰！！！！！！！！！！！！！


// 在 DOM 元素上添加 Ref
class CustomTextInput extends React.Component {
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
{
    render(<CustomTextInput />, document.getElementById('app'));
}

// 为 类(Class) 组件添加 Ref
{
    class AutoFocusTextInput extends React.Component {
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

// 在函数式组件内部使用 ref
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
                    ref={(input) => textInput = input}
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

// 对父组件暴露 DOM 节点
{

}

// 回调 Refs  better
// 如果 ref 回调以内联函数的方式定义，在更新期间会被调用两次，第一次参数是 null ，之后参数是 DOM 元素。
// 通过将 ref 的回调函数定义成类的绑定函数的方式可以避免上述问题
{
    class CustomTextInput4 extends React.Component {
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

    render(<CustomTextInput4 />, document.getElementById('app4'));
}