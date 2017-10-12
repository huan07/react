/**
 * Created by yanghuan on 17/7/15.
 */

import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// 组件就像JavaScript函数，组件可以接收任意输入（称为"props",this.props.children:组件的所有子节点）；并返回React元素
// props是禁止被修改的 ============

// class=>className,for=>htmlFor

// 元素可以是代表DOM标签的React元素，或者是代表用户自定义的组件；

// 组件总是以大写字母开头的，必须返回一个单独的根元素；

// 函数式组件和类组件(会有一些额外的特性=>局部状态和生命周期钩子)


function Welcome(props) {
    return <h1>hello, {props.name}</h1>;
}

class Welcome2 extends React.Component {
    render() {
        return <h1>hello, {this.props.name}</h1>;
    }
}


const Greeting = ({ name, age }) => {
    return (
        <div>
            <h2>{`name is ${name}`}</h2>
            <h3>{`age is ${age}`}</h3>
        </div>
    );
};

Greeting.defaultProps = {
    name: 'ycg',
    age: 29,
};

Greeting.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

class Greeting2 extends Component {
    render() {
        const { job } = this.props;

        return (
            <h2>{`job is ${job}`}</h2>
        )
    }
}

Greeting2.defaultProps = {
    job: 'woman or a mother',
};

Greeting2.propTypes = {
    job: PropTypes.string.isRequired,
};

// more propTypes
// http://www.css88.com/react/docs/typechecking-with-proptypes.html

const element = (
    <div>
        <h1>代表DOM标签的React元素</h1>
        <div>以下是代表用户自定义的组件</div>
        <Welcome name="yh" />
        <Welcome2 name="yc" />
        <Greeting />
        <Greeting2 job="beauty girl" />
    </div>
);

render(element, document.getElementById('app'));