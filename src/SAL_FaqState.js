/**
 * Created by yanghuan on 18/8/18.
 */

import React, { PureComponent } from '../react.js';
import { render } from '../react-dom.js';

// setState 的调用是异步的 - 在调用 setState 之后，不要依赖 this.state 来立即反映新值
// setState() 并不总是立即更新组件。它可能会 批量 或 延迟到后面更新
{
    class ButtonClick extends PureComponent {
        state = {
            numberX: 0,
            number: 0,
        };

        render(){
            return (
                <div>
                    <button
                        type="button"
                        onClick={this.clickX}
                    >
                        clickX: {this.state.numberX}
                    </button>

                    <button
                        type="button"
                        onClick={this.click}
                    >
                        click: {this.state.number}
                    </button>
                </div>
            );
        }

        clickX = () =>{

            this.setState({ numberX: this.state.numberX + 1 });

            this.setState({ numberX: this.state.numberX + 1 });

            // 处于同一次生命周期中两个set的值是相同的，因此执行后只会 + 1
        };


        click = () =>{

            this.setState((prevState) => ({ number: prevState.number + 1 }));

            this.setState((prevState) => ({ number: prevState.number + 1 }));

            // 依赖于当前状态的值更新状态，传递回调函数
        }
    }

    render(<ButtonClick />, document.getElementById('app'));
}

//  任务队列的代码进入主线程执行 ! ! !
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
                    clicked: {this.state.number}
                </button>
            );
        }

        click(){
            this.setState({
                number: this.state.number + 1,
            });
            this.setState({
                number: this.state.number + 1,
            });
            console.log(this.state.number); // 0

            setTimeout(() =>{
                console.log(this.state.number); // 1


                this.setState({
                    number: this.state.number + 1,
                });
                this.setState({
                    number: this.state.number + 1,
                });
                console.log(this.state.number); // 3
            }, 0);
        }
    }

    render(<ButtonClick2 />, document.getElementById('app2'));
}

