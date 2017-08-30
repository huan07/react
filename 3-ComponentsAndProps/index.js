/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';

// 组件就像JavaScript函数，组件可以接收任意输入（称为"props",this.props.children:组件的所有子节点）；并返回React元素
// props是禁止被修改的 ============

// 函数式组件和类组件(会有一些额外的特性=>局部状态和生命周期钩子)


// 元素可以是代表DOM标签的React元素，或者是代表用户自定义的组件；

// 组件总是以大写字母开头的，必须返回一个单独的根元素；


function Welcome(props) {
    return <h1>hello, {props.name}</h1>;
}

class Welcome2 extends React.Component {
    render() {
        return <h1>hello, {this.props.name}</h1>;
    }
}

const element = (
    <div>
        <h1>代表DOM标签的React元素</h1>
        <div>以下是代表用户自定义的组件</div>
        <Welcome name="yh" />
        <Welcome2 name="yc" />
    </div>
);

render(element, document.getElementById('app'));

// 阮老师解读
// 1.组件类的第一个字母必须大写，否则会报错
// 2.组件类只能包含一个顶层标签，否则也会报错
// 3.组件的属性可以在组件类的 this.props 对象上获取
// class=>className,for=>htmlFor