/**
 * Created by yanghuan on 18/8/6.
 */
import React, { PureComponent }from 'react';
import { render } from 'react-dom';

// to add
// 第二个 ref 参数仅在使用 React.forwardRef 调用定义组件时才存在。
// 常规函数或类组件不接收 ref 参数，而且 props 也不提供 ref

const FancyButton = React.forwardRef((props, ref) => (
        <input ref={ref} className="FancyButton">
            {props.children}
        </input>
    )
);

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
render((
    <FancyButton ref={ref}>Click me!</FancyButton>
), document.getElementById('app'));

// to do