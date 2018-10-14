/**
 * Created by yanghuan on 18/9/1.
 */
import React, { PureComponent } from '../react.js';
import ReactDOM, { render, findDOMNode } from '../react-dom.js';

{
    class Demo extends PureComponent {
        componentDidMount(){
            const $this = findDOMNode(this);
            $this.addEventListener('click', this.onDOMClick, false);
        }

        onDOMClick = evt =>{
            evt.stopPropagation();
            console.log('dom event')
        };

        onClick = evt =>{
            console.log('react event')
        };

        render(){
            return (
                <div onClick={this.onClick}>Demo 冒泡到documnet</div>
            );
        }

        componentWillUnmount(){

        }
    }

    render(<Demo />, document.getElementById('app'));
}


{
    class Demo2 extends PureComponent {
        componentDidMount(){
            const $parent = findDOMNode(this);
            const $child = $parent.querySelector('.child');

            $parent.addEventListener('click', this.onParentDOMClick, false);
            $child.addEventListener('click', this.onChildDOMClick, false);
        }

        onChildDOMClick = evt =>{

            console.log('child dom event')
        };

        onParentDOMClick = evt =>{

            console.log('parent dom event')
        };

        onChildClick = evt =>{
            evt.stopPropagation();
            console.log('child react event')
        };

        onParentClick = evt =>{
            console.log('parent react event')
        };

        render(){
            return (
                <div onClick={this.onParentClick}>
                    <div className="child" onClick={this.onChildClick}>
                        Demo 冒泡到parent, document
                    </div>
                </div>
            )
        }
    }

    render(<Demo2 />, document.getElementById('app2'));
}

