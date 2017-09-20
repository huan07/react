/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';

// 建议使用组合而不是继承以实现代码的重用
// 使用特别的 children prop 来直接传递 子元素到 他们的输出中
// 在一个组件中你可能需要多个 “占位符” 可以使用自定义的 prop(属性)，而不是使用 children
// 使用 props(属性) 和 组合已经足够灵活来明确、安全的定制一个组件的外观和行为
// props => 原始值、React 元素，或者函数

function FancyBorder(props) {/* 允许其他组件通过嵌套 JSX 传递任意子组件给他 */
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}


/*render(
 <WelcomeDialog />,
 document.getElementById('app')
 );*/

// 函数式定义的组件组合
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

function WelcomeDialog2() {
    return (
        <Dialog
            title="WelcomeDialog2"
            message="WelcomeDialog2 Thank you for visiting our spacecraft!"
        />
    );
}

/*render(
 <WelcomeDialog2 />,
 document.getElementById('app')
 );*/


// 类定义的组件组合
class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    render() {
        return (
            <Dialog title="SignUpDialog Mars Exploration Program"
                    message="SignUpDialog How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        )
    }

    handleChange(e) {
        this.setState({ login: e.target.value });
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

}

render(
    <SignUpDialog />,
    document.getElementById('app')
);