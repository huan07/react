/**
 * Created by yanghuan on 18/8/18.
 */

import React, { PureComponent } from 'react';
import { render } from 'react-dom';

// setState 的调用是异步的 - 在调用 setState 之后，不要依赖 this.state 来立即反映新值。
// 同一个函数内多次setState合并一次去render，提高性能
{
    class ButtonClick extends PureComponent {
        constructor(props){
            super(props);
            this.click = ::this.click;
            this.state = {
                number: 0,
            };
        }

        render(){
            return (
                <button
                    type="button"
                    onClick={this.click}
                >
                    clicked: {this.state.number}
                </button>
            );
        }

        incrementNumber(){
            this.setState({
                number: this.state.number + 1,
            });
        }

        click(){
            this.incrementNumber();
            this.incrementNumber();
        }
    }

    render(<ButtonClick />, document.getElementById('app'));
}

// 传递更新函数解决而不是传递对象
{
    class ButtonClick2 extends PureComponent {
        constructor(props){
            super(props);
            this.click = ::this.click;
            this.state = {
                number: 0,
            };
        }

        render(){
            return (
                <button
                    type="button"
                    onClick={this.click}
                >
                    修正后 clicked: {this.state.number}
                </button>
            );
        }

        incrementNumber(){ // 传递一个更新函数允许你在更新中访问当前的状态值
            this.setState((prevState) => ({
                    number: prevState.number + 1,
                })
            );
        }

        click(){
            this.incrementNumber();
            this.incrementNumber();
        }
    }

    render(<ButtonClick2 />, document.getElementById('app2'));
}

