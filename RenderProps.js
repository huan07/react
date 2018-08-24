/**
 * Created by yanghuan on 18/8/23.
 */

import React, { PureComponent } from 'react';
import { render, } from 'react-dom';

{
    class MouseTracker extends React.Component {
        constructor(props){
            super(props);
            this.handleMouseMove = ::this.handleMouseMove;
            this.state = { x: 0, y: 0 };
        }

        handleMouseMove(event){
            this.setState({
                x: event.clientX,
                y: event.clientY
            });
        }

        render(){
            return (
                <div style={{ height: '100px', backgroundColor: 'pink' }}
                     onMouseMove={this.handleMouseMove}
                >
                    <h1>Move the mouse around!</h1>
                    <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
                </div>
            );
        }
    }

    render(<MouseTracker />, document.getElementById('app'));
}

{
    class Mouse extends React.Component {
        constructor(props){
            super(props);
            this.handleMouseMove = this.handleMouseMove.bind(this);
            this.state = { x: 0, y: 0 };
        }

        handleMouseMove(event){
            this.setState({
                x: event.clientX,
                y: event.clientY
            });
        }

        render(){
            return (
                <div style={{ height: '100px', backgroundColor: 'pink' }}
                     onMouseMove={this.handleMouseMove}
                >
                    <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
                </div>
            );
        }
    }

    class MouseTracker2 extends React.Component {
        render(){
            return (
                <div>
                    <h1>Move the mouse around!</h1>
                    <Mouse />
                </div>
            );
        }
    }

    render(<MouseTracker2 />, document.getElementById('app2'));
}

// 实现真正的将行为封装成可重用的方式的目标
{
    class Cat extends React.Component {
        render(){
            const mouse = this.props.mouse;
            return (
                <img src="./icon-wyz-logo.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
            );
        }
    }

    class Mouse extends React.Component {
        constructor(props){
            super(props);
            this.handleMouseMove = this.handleMouseMove.bind(this);
            this.state = { x: 0, y: 0 };
        }

        handleMouseMove(event){
            this.setState({
                x: event.clientX,
                y: event.clientY
            });
        }

        render(){
            return (
                <div style={{ height: '200px', backgroundColor: 'pink' }}
                     onMouseMove={this.handleMouseMove}
                >
                    {this.props.render(this.state)}
                </div>
            );
        }
    }

    class MouseTracker extends React.Component {
        render(){
            // 在 render 方法里创建函数
            return (
                <div >
                    <h1>Move the mouse around!</h1>
                    <Mouse render={mouse => (
                        <Cat mouse={mouse} />
                    )}
                    />
                </div>
            );
        }
    }

    render(<MouseTracker />, document.getElementById('app3'));
}