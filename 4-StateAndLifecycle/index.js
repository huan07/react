/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';

// 1.
function Clock(props) {
    return (
        <div>
            <h1>Hello,world1</h1>
            <h2>It is {props.date.toLocaleTimeString()}</h2>
        </div>
    )
}

function tick() {
    render(<Clock date={new Date()} />, document.getElementById('app'));
}

// setInterval(tick, 1);


// 2. props => state
class Clock2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }; // 唯一可以分配this.state的地方；其它地方需要this.setState({})
    }

    componentDidMount() {
        this.timerID = setInterval(/*??????*/
            () => this.tick(),
            1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
                <h1>Hello,world1</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

render(
    <Clock2 />,
    document.getElementById('app')
);

// 3. to add


