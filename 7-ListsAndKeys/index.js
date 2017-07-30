/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';


// 元素中调用 map() 才需要 keys，keys在同辈元素中必须是唯一的；

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );

    return (
        <ul>{listItems}</ul> /*展开数组的每一项*/
    );
}

const numbers = [1, 2, 3, 4, 5];
render(
    <NumberList numbers={numbers} />,
    document.getElementById('app')
);


