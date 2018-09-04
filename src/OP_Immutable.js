/**
 * Created by yanghuan on 18/9/2.
 */
import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';
import Immutable, { is } from 'immutable';
import { shouldComponentUpdate } from 'react-immutable-render-mixin';

// 深拷贝的实现会耗费很多内存，

{
    class Div extends PureComponent {

        render(){
            return <div>测试</div>;
        }

        componentDidMount(){
            const myClass1 = Immutable.fromJS({ classmates: { name: 'myClass1' } });
            const myClass2 = myClass1.setIn(['classmates', 'name'], 'myClass2');

            console.log(myClass1.getIn(['classmates', 'name']), myClass2.getIn(['classmates', 'name']));
            console.log(myClass1 === myClass2); // false
        }
    }

    render(<Div />, document.getElementById('app'));
}


{
    class OptimisePerformance3 extends Component {
        constructor(props){
            super(props);
            this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
            this.state = { count: 1 };
        }

        render(){
            return (
                <button
                    onClick={() => this.setState(state => ({ count: state.count + 1 }))}
                >
                    count: {`${ this.state.count} color: ${this.props.color}`} _x
                </button>
            );
        }
    }

    render(<OptimisePerformance3 color="green" />, document.getElementById('app3'));
}