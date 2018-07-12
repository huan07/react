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

class CustomTextInput1 extends PureComponent {
    constructor(props){
        super(props);
        this.focusX = ::this.focusX;
    }

    focusX(){
        this.textInput.focus();
    };

    render(){
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => this.textInput = input}
                />
                <input
                    type="button"
                    value="focus the text input"
                    onClick={this.focusX}
                />
            </div>
        );
    }
}


function CustomTextInput3(props){
    let textInput = null; // 必须先声明，被ref回调引用

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
                value="focus the text input 3"
                onClick={handleClick}
            />
        </div>
    )
}

function CustomTextInput4(props){
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    )
}

class Parent extends PureComponent {
    render(){
        return (
            <CustomTextInput4
                inputRef={el => this.inputElement = el}
            />
        )
    }
}

const element = (
    <div>
        <CustomTextInput1 />
        <CustomTextInput3 />
    </div>
);

render(
    element
    , document.getElementById('app')
);