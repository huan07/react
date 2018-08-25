/**
 * Created by yanghuan on 17/7/15.
 */

import React, { PureComponent }from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

// 组件就像JavaScript函数，组件可以接收任意输入（称为"props",this.props.children:组件的所有子节点）；并返回React元素
// React严格的规则：所有React组件都必须是纯函数，并禁止修改其自身 props。
// class => className,for => htmlFor

// React元素：
// DOM标签，
// 用户自定义的组件（组件名总是以大写字母开头的，必须返回  一个单独的根元素）；

// 函数式组件
// 类组件(具备一些额外的特性 => 局部状态和生命周期钩子)

const Greeting = ({ name, age }) =>{
    return (
        <div>
            <h2>{`name is ${name}`}</h2>
            <h3>{`age is ${age}`}</h3>
        </div>
    );
};

Greeting.defaultProps = { // 老的静态属性
    name: 'ycg',
    age: 29,
};

Greeting.propTypes = {
    /* 也会对默认属性 defaultProps 进行类型检测。  只会在开发环境检测， */
    name: PropTypes.string,
    age: PropTypes.number,
};

class Greeting2 extends PureComponent {

    static defaultProps = { // 新的静态属性
        job: 'woman or a mother',
    };

    static propTypes = {
        job: PropTypes.string.isRequired,
    };

    render(){
        const { job } = this.props;

        return (
            <div>
                <h2>
                    {`job is ${job}`}
                </h2>
                <a href="http://www.css88.com/react/docs/typechecking-with-proptypes.html" target="_blank">
                    more propTypes
                </a>
            </div>
        );
    }
}

const element = (
    <div>
        <h1>DOM标签的React元素</h1>
        <div>用户自定义的组件</div>
        <Greeting />
        <Greeting2 job="beauty girl" betterUsed />
    </div>
);

render(element, document.getElementById('app'));