/**
 * Created by yanghuan on 17/11/22.
 */

import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';

function shouldComponentUpdate(nextProps, nextState){
    return true; // react default
}

class OptimisePerformance1 extends Component {
    state = { count: 1 };

    shouldComponentUpdate(nextProps, nextState){
        // 组件仅当 props.color 或 state.count 发生改变时需要更新
        if (this.props.color !== nextProps.color) {
            return true;
        }
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render(){
        return (
            <button
                onClick={() => this.setState(prevState => ({ count: prevState.count + 1 }))}
            >
                {JSON.stringify(this.props)}<br />
                {JSON.stringify(this.state)}<br />
                _x
            </button>
        );
    }
}

class OptimisePerformance2 extends PureComponent {
    // PureComponent 浅比较
    // 不能和 shouldComponentUpdate 一起使用，否则会warning
    state = { count: 1 };

    render(){
        return (
            <button
                onClick={() => this.setState(prevState => ({ count: prevState.count + 1 }))}
            >
                {JSON.stringify(this.props)}<br />
                {JSON.stringify(this.state)}<br />
                _x
            </button>
        );
    }
}


//
class ListOfWords extends PureComponent {
    // 永远都不会去render this.props浅比较失败
    render(){
        return <div>{this.props.words.join(', ')}</div>;
    }
}

class WordAdder extends PureComponent {
    state = {
        words: ['marklar'],
    };

    handleClick = () =>{
        const words = this.state.words;
        words.push('marklar_error'); // 会造成error   ！！！！！！！！！！！！！！！！
        this.setState({ words, });
    };

    render(){
        // Component => shouldComponentUpdate() default return true,
        // 此处会调用render

        // PureComponent => shouldComponentUpdate() 会去浅比较，this.state.words引用地址未变，
        // 此处不会去调用render，不符合应用场景
        return (
            <div style={{ marginTop: '40px' }}>
                <button onClick={this.handleClick}>button _x</button>
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}


//
class WordAdder3 extends PureComponent {
    state = {
        words: ['marklar'],
    };

    handleClick = () =>{ // 使得改变对象的同时不会突变对象
        this.setState(prevState => ({
            words: prevState.words.concat(['marklar_betterUsedbutton1'])
        }));
    };

    handleClick2 = () =>{ // 使得改变对象的同时不会突变对象
        this.setState(prevState => ({
            words: [...prevState.words, 'marklar_betterUsedbutton2']
        }));
    };

    render(){
        return (
            <div style={{ marginTop: '40px' }}>
                <button onClick={this.handleClick}>button1</button>
                <button onClick={this.handleClick2}>button2</button>
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}

const element = (
    <div>
        <OptimisePerformance1 color="red" />
        <OptimisePerformance2 color="green" better />

        <WordAdder error />
        <WordAdder3 better />
    </div>
);

render(
    element,
    document.getElementById('app')
);