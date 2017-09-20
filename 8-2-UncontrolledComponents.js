/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';

// 推荐使用受控组件来实现表单
// 在受控组件中，表单数据由 React 组件负责处理；
// 在不受控组件中，其表单数据由 DOM 元素本身处理；使用一个 ref 来从 DOM 获得 表单值，而不是为每个状态更新编写一个事件处理程序。

// 默认值
// <input type="checkbox"> 和 <input type="radio"> 支持 defaultChecked，
// 而 <input> <textarea>  和  <select>支持 defaultValue.
class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleSumbit(event) {
        alert(`A name was submitted ${this.input.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <label>
                    input:
                    <input type="text" defaultValue="Bob"
                           ref={(input) => this.input = input} />
                </label>
                <br /><br />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

render(
    <NameForm />,
    document.getElementById('app')
);