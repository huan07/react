/**
 * Created by yanghuan on 17/11/12.
 */

import React, { Component } from 'react';
import { render } from 'react-dom';

// DOM元素
// React 将会在组件装载(mount)时，用 DOM 元素作为参数回调 ref 函数，在组件卸载(unmounts)时，使用 null 作为参数回调函数

// 类
// ref回调函数接受的参数是装载的组件实例

// 函数式组件 内部引用DOM元素、类组件

// 对父组件暴露DOM节点 允许父代通过中间件将ref回调给子代的DOM节点 适用于类组件、函数式组件

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.focusX = this.focusX.bind(this);
    }

    focusX() {
        this.textInput.focus();
    };

    render() {
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


function CustomTextInput3(props) {
    let textInput = null; // 必须先声明，被ref回调引用

    function handleClick() {
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


const element = (
    <div>
        <CustomTextInput />
        <CustomTextInput3 />
    </div>
);

render(
    element
    , document.getElementById('app')
);