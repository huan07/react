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
                onClick={() => this.setState(state => ({ count: state.count + 1 }))}
            >
                count: {`${ this.state.count} color: ${this.props.color}`}
            </button>
        )
    }
}

class OptimisePerformance2 extends PureComponent {
    // 不需要自己写shouldComponentUpdate继承了PureComponent的方法
    // PureComponent  不能和   shouldComponentUpdate  一起使用，否则会warning
    state = { count: 1 };

    render(){
        return (
            <button
                onClick={() => this.setState(state => ({ count: state.count + 1 }))}
            >
                count:{ this.state.count}color:{this.props.color}
            </button>
        )
    }
}


class ListOfWords extends PureComponent {
    render(){
        return <div>{this.props.words.join(', ')}</div>;
    }
}

class WordAdder extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            words: ['marklar'],
        };
        this.handleClick = ::this.handleClick;
    }

    handleClick(){
        // 会造成error   ！！！！！！！！！！！！！！！！
        const words = this.state.words;
        words.push('marklar_error');
        this.setState({ words, });  // 然而并没有去render ？？？PureComponent失效了，浅比较？？？比较的是指针指向的地址 ？？？？？？？？？？？？？？？？？？？？？？？？？
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick} />
                <ListOfWords words={this.state.words} />
            </div>
        )
    }
}


class ListOfWords2 extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if (this.props.words !== nextProps.words) {
            return true;
        }
        if (this.props.words === nextProps.words) {
            return true;
        }
    }

    render(){
        return <div>{this.props.words.join(', ')}</div>;
    }
}

class WordAdder2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            words: ['marklar'],
        };
        this.handleClick = ::this.handleClick;
    }

    shouldComponentUpdate(nextProps, nextState){
        if (this.state.words !== nextState.words) {
            return true;
        }
        if (this.state.words === nextState.words) {
            return true;
        }
    }

    handleClick(){
        // 会造成error   ！！！！！！！！！！！！！！！！
        const words = this.state.words;
        words.push('marklar_notErrorButNotGood');
        this.setState({ words, });  // 去render ？要结合shouldComponentUpdate？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick} />
                <ListOfWords2 words={this.state.words} />
            </div>
        )
    }
}


class ListOfWords3 extends PureComponent {
    render(){
        return <div>{this.props.words.join(', ')}</div>;
    }
}

class WordAdder3 extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            words: ['marklar'],
        };
        this.handleClick = ::this.handleClick;
        this.handleClick2 = ::this.handleClick2;
    }

    handleClick(){
        this.setState(prevState => ({
            words: prevState.words.concat(['marklar_betterUsedbutton1'])
        }));
    }

    handleClick2(){
        this.setState(prevState => ({
            words: [...prevState.words, 'marklar_betterUsedbutton2']
        }));
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>button1</button>
                <button onClick={this.handleClick2}>button2</button>
                <ListOfWords3 words={this.state.words} />
            </div>
        )
    }
}

const element = (
    <div>
        <OptimisePerformance1 color="red" />
        <OptimisePerformance2 color="green" betterUsed />

        <WordAdder error />
        <WordAdder2 notErrorButNotGood />
        <WordAdder3 betterUsed />
    </div>
);

render(
    element
    , document.getElementById('app')
);