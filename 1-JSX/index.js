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

render(element, document.getElementById('app'))

// 3. 用JSX指定属性值
const element1 = <div tabIndex="0"></div>; // 属性名用驼峰属性命名

const element2 = <img src={`url`}></img>

// 4. JSX表示对象
