/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';

// const element = <h1>Hello, World! </h1>;

// 1.用 花括号 把任意的 JavaScript 表达式 嵌入到 JSX 中

function formatName(user) {
    return user.firstName + ',' + user.lastName;
}

const user = {
    firstName: 'firstName-y',
    lastName: 'lastName-h',
};

// 2.JSX 也是一个表达式
function getGreeting(user) {
    if (user) {
        return <h4 >xxx, {formatName(user)}!</h4>
    }
    return <h4 >xxx, Stranger.</h4>
}

const element = (
    <div>
        <h3>Hello, {formatName(user)}</h3>
        {getGreeting(user)}
        {getGreeting()}
    </div>
);

//render(element, document.getElementById('app'));

// 3. 用JSX指定属性值，子元素
const element1 = <div tabIndex="0"></div>; // 属性名用驼峰属性命名

const element2 = <img src={`url`}></img>

// 4. JSX表示对象

// 阮老师解释JSX语法：允许 HTML 与 JavaScript 的混写
// 1.遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；
// 2.遇到代码块（以 { 开头），就用 JavaScript 规则解析；遇到数组，直接展开数组的每一项；

const names = ['baidu1', 'baidu2'];
const namesDOM = [
    <h1 key="1">Hello world!</h1>,
    <h2 key="2">React is awesome</h2>
];

render(
    <div>
        {
            names.map((item, index) => {
                return <div key={index}>Hello,{item}</div>;
            })
        }
        { names }
        {namesDOM}
    </div>,
    document.getElementById('app')
);