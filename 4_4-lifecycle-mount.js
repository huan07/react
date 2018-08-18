/**
 * Created by yanghuan on 18/8/18.
 */
import React, { PureComponent } from 'react';
import { render }from 'react-dom';

// Mounting(装载)
{
    class Mounting extends PureComponent {
        constructor(props){
            super(props);
            this.state = {
                mounting: true,
            };

            console.log('1. 组件初始化state, ' +
                '事件绑定');
        }

        componentWillMount(){
            console.log('2. 组件初始化调用，以后组件更新不会调用，' +
                '可以 setState , 但是会和构造函数初始化的state合并，然后去执行render()' +
                '只调用一次');
        }

        render(){
            console.log('3. 创建虚拟DOM');
            return <h4>this.state.mounting => {this.state.mounting + ''}</h4>;
        }

        componentDidMount(){
            console.log('4. render之后调用，此时DOM已经被渲染，可以通过this.getDOMNode()获取和操作DOM节点' +
                '可以 setState , 然后去执行render()' +
                '只调用一次');
            this.setState({
                mounting: false,
            });
        }

        componentWillUnmount(){
            console.log('事件监听，定时器清除');
        }
    }

    render(<Mounting />, document.getElementById('app'));
}

// Mounting(装载): 没有constructor
{
    class Mounting2 extends PureComponent {
        render(){
            return <h4>this.state.mounting => {this.state
            + ''}</h4>;
        }

        componentDidMount(){
            console.log('Mounting(装载): 没有constructor, ');
        }
    }

    render(<Mounting2 />, document.getElementById('app2'));
}
