/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render } from 'react-dom';

{
    const element = <h1>Hello, World!</h1>;
}

{
    // 1.用 {} 把任意的 JavaScript表达式 嵌入到 JSX 中
    function formatName(user){
        return user.firstName + ',' + user.lastName;
    }

    const user = {
        firstName: 'firstName-y',
        lastName: 'lastName-h',
    };

    // 2.JSX 也是一个表达式
    function getGreeting(user){
        if (user) {
            return <h4 >Hello, {formatName(user)}!</h4>;
        }
        return <h4 >Hello, Stranger.</h4>;
    }

    const element = (
        <div>
            <h3>Hello, {formatName(user)}</h3>
            {getGreeting(user)}
            {getGreeting()}
        </div>
    );

    render(element, document.getElementById('app'));
}

{
    // 3. 用JSX指定属性值，子元素
    const element = <div tabIndex="0"></div>; // 属性名用驼峰属性命名className

    const url = `https://www.baidu.com/img/baidu_jgylogo3.gif`;
    const element2 = <img src={url} />;
    render(element2, document.getElementById('app2'));
}


// 4. JSX表示对象，
// Babel 将JSX编译成 React.createElement() 调用


// 阮老师解释JSX语法：允许 HTML 与 JavaScript 的混写
// 1.遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；
// 2.遇到代码块（以 { 开头），就用 JavaScript 规则解析；遇到数组，直接展开数组每一项；
{
    const names = ['safari', 'chrome'];
    const namesDOM = [
        <h1 key="1">Hello world!</h1>,
        <h2 key="2">React is awesome</h2>
    ];

    const element = (
        <div>
            { names }
            {
                names.map((item, index) => <h1 key={index}>{ item } engine</h1>)
            }
            {namesDOM}
        </div>
    );

    render(element, document.getElementById('app'));
}