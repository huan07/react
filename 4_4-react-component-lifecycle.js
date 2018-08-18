/**
 * Created by yanghuan on 18/8/18.
 */
import React, { PureComponent } from 'react';
import { render }from 'react-dom';

// Mounting(装载)
// constructor => render => componentDidMount(有setState，再去执行render)
{
    class Mounting extends PureComponent {
        constructor(props){
            super(props);
            this.state = {
                mounting: true,
            };
        }

        render(){
            return <h4>组件实例 被创建并将其插入DOM时，this.state.mounting => {this.state.mounting + ''}</h4>;
        }

        componentDidMount(){
            this.setState({
                mounting: false,
            });
        }
    }

    render(<Mounting />, document.getElementById('app'));
}

// Mounting(装载): 没有constructor
// render => componentDidMount
{
    class Mounting2 extends PureComponent {
        render(){
            return <h4>组件实例 被创建并将其插入DOM时，this.state.mounting => {this.state
            + ''}</h4>;
        }

        componentDidMount(){
            alert('Mounting(装载): 没有constructor, ');
        }
    }

    render(<Mounting2 />, document.getElementById('app2'));
}

// Updating(更新)
// New props,  setState(),  forceUpdate()行为导致
// shouldComponentUpdate => render => componentDidUpdate

// componentDidUpdate内部不要再执行setState, 否则一直循环执行
{
    class Updating extends React.Component {
        constructor(props){
            super(props);
            this.click = ::this.click;
            this.state = {
                updating: false,
            };
        }

        click(){
            this.setState({
                updating: true,
            });
        }

        shouldComponentUpdate(nextProps, nextState){
            // 使用内置的PureComponent  浅比较
            // 而不是手动编写shouldComponentUpdate
            return true;
        }

        render(){
            return <h4 onClick={this.click}>
                更新可以由对 props 或 state 的更改引起，this.state.updating => {this.state.updating + ''}
            </h4>;
        }

        componentDidUpdate(prevProps){
            if (this.props.xx !== prevProps.xx) {
                //;
            }
            alert('必须包含在条件语句中调用 setState()，否则会导致无限循环');
        }
    }

    render(<Updating />, document.getElementById('app3'));
}

// Unmounting(卸载)
// componentWillUnmount
