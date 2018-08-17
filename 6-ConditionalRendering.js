/**
 * Created by yanghuan on 17/7/15.
 */

import React, { PureComponent } from 'react';
import { render } from 'react-dom';

// 1.if / 条件操作符
function UserGreeting(props){
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props){
    return <h1>Please sign up.</h1>;
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

render(
    <Greeting isLoggedIn={true}></Greeting>,
    document.getElementById('app')
);

// 2.创建一个有状态组件
function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends PureComponent {
    constructor(props, context){
        super(props, context);
        this.state = {
            isLoggedIn: false,
        };
        this.handleLoginClick = ::this.handleLoginClick;
        this.handleLogoutClick = ::this.handleLogoutClick;
    }

    handleLoginClick(){
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick(){
        this.setState({ isLoggedIn: false });
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div style={{ margin: '40px 0' }}>
                <Greeting isLoggedIn={isLoggedIn}></Greeting>
                {button}
            </div>
        );
    }
}

render(
    <LoginControl />,
    document.getElementById('app2')
);


// 3.包裹在{}中，更简短的语法实现条件渲染
// a.逻辑 && 操作符；
// b.条件操作符(三目运算符)

function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>hello!</h1>
            {
                unreadMessages.length > 0 &&
                (<h2>
                    you have {unreadMessages.length} unread messages.
                </h2>)
            }
            {
                unreadMessages.length > 2
                    ? <h2>
                        you have {unreadMessages.length} unread messages.
                    </h2>
                    : null
            }
            {
                unreadMessages.length > 2 ?
                    (<h2>
                        you have {unreadMessages.length} unread messages.
                    </h2>) :
                    null
            }
        </div>
    );
}

const messages = ['baidu', 'baidu2', 'baidu3'];
render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('app3')
);

// 4.防止组件渲染（return null；不会影响组件生命周期方法的触发？？）
function WarningBanner(props){
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends PureComponent {
    constructor(props, context){
        super(props, context);
        this.state = { showWarning: true };
        this.handleToggleClick = ::this.handleToggleClick;
    }

    handleToggleClick(){
        this.setState(prevState => ({
            showWarning: !prevState.showWarning,
        }));
    }

    render(){
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

render(
    <Page />,
    document.getElementById('app4')
);
