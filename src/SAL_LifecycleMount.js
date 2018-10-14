/**
 * Created by yanghuan on 18/8/18.
 */
import React, { PureComponent } from 'react';
import { render } from 'react-dom';


// Mounting(装载)
{
    class Mounting extends PureComponent {
        constructor(props){
            super(props);
            this.state = {
                mounting: true,
            };

            console.log('1. 组件初始化state, 回调函数绑定this');
        }

        componentWillMount(){ // 生命周期内只调用一次
            console.log('2. 组件初始化调用，' +
                '可以 setState , 但是会和构造函数初始化的state合并，然后去执行 render() '
            );
        }

        render(){
            console.log('3. 创建虚拟DOM');
            return <h4>this.state.mounting => {this.state.mounting + ''}</h4>;
        }

        componentDidMount(){ // 生命周期内只调用一次
            console.log('4. render之后调用，此时DOM已经被渲染，可以通过this.getDOMNode()获取和操作DOM节点' +
                '可以 setState '
            );
            this.setState({
                mounting: false,
            });
        }

        componentWillUnmount(){
            console.log('事件监听，定时器清除' +
                '因为页面卸载时，ajax请求的结果未返回，to do ' +
                '组件离开页面会报错');
        }
    }

    render(<Mounting />, document.getElementById('app'));
}
