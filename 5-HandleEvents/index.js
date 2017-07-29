/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';

// 1.使用驼峰命名，而不是全部小写
// 2.通过JSX，传递一个函数作为事件处理程序，而不是一个字符串
// 3.阻止默认行为，必须调用preventDefault，不能通过return false;

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('This link was clicked');
    }

    return (
        <a href="http://www.baidu.com" onClick={handleClick}>
            Click me but will be prevented
        </a>
    )
}

render(<ActionLink />, document.getElementById('app'))


