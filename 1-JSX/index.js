/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';

// const element = <h1>Hello, World! </h1>;

// 用 花括号 把任意的 JavaScript 表达式 嵌入到 JSX 中

function formatName(user) {
    return user.firstName + ',' + user.lastName;
}

const user = {
    firstName: 'firstName-y',
    lastName: 'lastName-h',
};

// JSX 也是一个表达式
function getGreeting(user) {
    if (user) {
        return <h4 >Hello, {formatName(user)}!</h4>
    }
    return <h4 >Hello, Stranger.</h4>
}

const element = (
    <div>
        <h3>Hello, {formatName(user)}</h3>
        {getGreeting(user)}
        {getGreeting()}
    </div>
);

render(element, document.getElementById('app'))