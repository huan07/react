import React from 'react';
import { render, } from 'react-dom';

// https://babeljs.io/


// 1.React 必须在作用域中
// 2.对 JSX 类型可以使用点语法
// 3.用户定义组件必须以大写字母开头
// 4.在运行时选择类型


// 5. props
// 6. props(属性) 默认为 "true"
// 7. 属性扩展 object类型的呃props
// JSX的 children


const MyComponent2 = {
    MyElement: (props) => {
        return <h1>hello, {props.name}</h1>;
    },
};

const MyElement41 = (props) => {
    return <h1>hello, {props.name}</h1>;
};

const MyElement42 = (props) => {
    return <h1>hello, {props.name}</h1>;
};

const components = {
    element1: MyElement41,
    element2: MyElement42,
};

const Story = (props) => {  // to add
    const XxxxYyy = components[props.element];
    return <XxxxYyy element={props.x} />
};


const MyElement5 = (props) => {
    return <h1>hello, {props.age}</h1>;
};

const MyElement6 = (props) => {  /* 不建议使用默认属性为true */
    return <h1>hello, {props.autocomplete}</h1>;
};

const MyElement7 = () => {
    return <h1 firstName="ben" lastName="egg">属性扩展</h1>;
};
const MyElement72 = () => { /*  会使代码非常混乱 */
    const props = { firstName: 'ben2', lastName: 'egg2' };
    return <h1 {...props}>属性扩展</h1>;
};

const MyElement8 = () => {  /* JSX会删除每行开头和结尾的空格，并且也会删除空行*/
    return (
        <h1>
            hello world!

        </h1>
    );
};

const MyElement82 = () => { /* 混合不同类型的 children(子元素)  */
    return (
        <div>
            <h1>blabla</h1>
            <MyElement7 />
            <MyElement72 />
        </div>
    )
};

const MyElement83 = () => { /* JavaScript 表达式作为 Children(子元素) {} */
    const todos = ['learn es6', 'learn redux'];
    return (
        <ul>
            {
                todos.map((item) => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    )
};

const MyElement84 = () => { /* 函数作为 Children(子元素)  to add  */

};

const MyElement85 = () => { /* null，undefined，false，true 都是有效的的 children(子元素) 。但是并不会被渲染
 0会被渲染的！！！！！！！！！！！！！！！！！！！！
 */
    return (
        <div>
            <h1 />
            <h1></h1>
            <h1>{null}</h1>
            <h1>{undefined}</h1>
            <h1>{false}</h1>
            <h1>{true}</h1>
            <h2>{0}</h2>
            <h2>
                {
                    [].length && <h1>渲染出[].length</h1>
                }
            </h2>

            <h2>
                {
                    [].length > 0 && <h1>不会渲染出[].length</h1>
                }
            </h2>
            <h2>{String(null)}</h2>
            <h2>{String(undefined)}</h2>
            <h2>{String(false)}</h2>
            <h2>{String(true)}</h2>
        </div>
    );
};


const element = (
    <div>
        <MyComponent2.MyElement name={'ycg'} />
        <MyElement5 age="4" />
        <MyElement5 age={'4'} />
        <MyElement6 autocomplete />
        <MyElement6 autocomplete={true} />
        <MyElement7 />
        <MyElement72 />
        <MyElement8 />
        <MyElement82 />
        <MyElement83 />
        <MyElement85 />
    </div>
);

render(
    element
    , document.getElementById('app')
);