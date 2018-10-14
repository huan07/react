/**
 * Created by yanghuan on 18/8/18.
 */
import React, { Component, PureComponent } from '../react.js';
import { render } from '../react-dom.js';

// Updating(更新)
// New props,  setState(),  forceUpdate()行为导致
{
    class TestPropsChanged extends Component {
        constructor(props){
            super(props);
            this.state = {
                propsChanged: false,
            };
        }

        componentWillReceiveProps(nextProps){
            if (this.props.parentUpdating !== nextProps.parentUpdating) {
                this.setState((prevState) => ({ propsChanged: !prevState.propsChanged }));
            }
            console.log('1.1 child 组件接受到新的props[从父组件传递过来的]时被调用，通过 setState');
        }

        shouldComponentUpdate(nextProps, nextState){
            console.log('1.2 child should Component Update');
            return true;
        }

        componentWillUpdate(nextProps, nextState){
            console.log('2. child component Will Update');
        }

        render(){
            console.log('3. child 创建虚拟DOM');
            return (
                <span>
                测试props改变<br />
                    {JSON.stringify(this.props)}<br />
                    {JSON.stringify(this.state)}
            </span>
            );
        }

        componentDidUpdate(prevProps, prevState){
            console.log('4. child component Did Update');
        }
    }


    class TestStateChanged extends Component {
        constructor(props){
            super(props);
            this.click = ::this.click;
            this.state = {
                updating: 0,
            };
        }

        click(){
            this.setState((prevState) => ({ updating: prevState.updating + 1, }));
        }

        shouldComponentUpdate(nextProps, nextState){
            // 性能优化点
            // 使用内置的PureComponent 浅比较
            // 无需编写shouldComponentUpdate，默认返回true
            console.log('1.2 组件接受到新的props/state时被调用, ' +
                '比较是否相同，' +
                'return true才执行更新虚拟DOM, 否则退出生命周期');

            const { updating } = this.state;
            if (updating < 3) {
                console.log('return true;');
                return true;
            }
            console.log('return false;');
            return false;
        }

        componentWillUpdate(nextProps, nextState){
            console.log('2. component Will Update');
        }

        render(){
            console.log('3. 创建虚拟DOM');
            const { updating } = this.state;
            return (
                <h2 onClick={this.click} style={{ cursor: 'pointer' }}>

                    点我！点我！测试state改变
                    {JSON.stringify(this.state)}
                    <br />
                    <br />
                    <TestPropsChanged parentUpdating={updating} />
                </h2>
            );
        }

        componentDidUpdate(prevProps, prevState){
            console.log('4. component Did Update, 可以获取DOM节点' +
                '必须包含在条件语句中调用 setState ,否则会导致无限循环');
            if (prevProps.xx !== this.props.xx) {
                //; this.setState()
            }
        }
    }

    render(<TestStateChanged />, document.getElementById('app'));
}
