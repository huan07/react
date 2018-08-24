/**
 * Created by yanghuan on 17/7/15.
 */

import React, { PureComponent } from 'react';
import { render, } from 'react-dom';

// 推荐使用受控组件来实现表单
// 在受控组件中，表单数据由 React 组件负责处理；
// 在不受控组件中，其表单数据由 DOM 元素本身处理；使用一个 ref 来从 DOM 获得 表单值，而不是为每个状态更新编写一个事件处理程序。

// 默认值
// <input type="radio">  和  <input type="checkbox">支持 defaultChecked，
// 而 <input> <textarea>  和  <select>支持 defaultValue.
{
    class NameForm extends PureComponent {
        constructor(props){
            super(props);
            this.handleSumbit = ::this.handleSumbit;
            this.input = React.createRef();
        }

        handleSumbit(event){
            alert(`A name was submitted ${this.input.current.value} ${this.input2.value}`);
            event.preventDefault();
        }

        render(){
            return (
                <form onSubmit={this.handleSumbit}>
                    <label>
                        input:
                        <input
                            type="text"
                            defaultValue="Bob"
                            ref={this.input}
                        />
                    </label>
                    <br /><br />

                    <label>
                        input2:
                        <input
                            type="text"
                            defaultValue="Bob2"
                            ref={node => this.input2 = node}
                        />
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
}