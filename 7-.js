/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';


// 调用 map() 或者 数组的元素是dom 才需要 keys，keys在同辈元素中必须是唯一的；
// key的值为字符串
// 键是React的一个内部映射，但其不会传递给组件的内部
// 如果列表项可能被重新排序时，我们不建议使用索引作为 keys，因为这导致一定的性能问题，会很慢

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


