/**
 * Created by yanghuan on 18/8/18.
 */
import React, { PureComponent } from 'react';
import { render }from 'react-dom';

// Updating(更新)
// New props,  setState(),  forceUpdate()行为导致
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

        componentWillReceiveProps(nextProps){
            console.log('props改变 1.1 组件接受到新的props时被调用，可以 setState');
        }

        shouldComponentUpdate(nextProps, nextState){
            // 性能优化点
            // 使用内置的PureComponent 浅比较
            // 无需编写shouldComponentUpdate
            console.log('state改变 1.2 组件接受到新的props/state时被调用, ' +
                '比较是否相同，' +
                'return true才执行更新虚拟DOM, 否则退出');
            return true;
        }

        componentWillUpdate(nextProps, nextState){
            console.log('2. componentWillUpdate');
        }

        render(){
            console.log('3. 创建虚拟DOM');
            return (
                <h4 onClick={this.click}>
                    this.state.updating => {this.state.updating + ''}
                </h4>
            );
        }

        componentDidUpdate(prevProps, prevState){
            console.log('4. componentDidUpdate, 可以获取DOM节点' +
                '必须包含在条件语句中调用 setState ,否则会导致无限循环');
            if (this.props.xx !== prevProps.xx) {
                //;
            }
        }
    }

    render(<Updating />, document.getElementById('app'));
}
