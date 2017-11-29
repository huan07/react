import React, { Component, PureComponent } from 'react';
import { render }from 'react-dom';

class Div extends Component {
    constructor(props) {
        super(props);
        const { count, } = props;
        this.state = {
            count,
        };
    }

    componentWillReceiveProps(nextProps) {
        const { count, } = nextProps;
        if (count !== this.state.count) {
            this.setState({ count, })
        }
    }

    render() {
        return (
            <div>{this.state.count}</div>
        );
    }

}


class LifecycleProps extends Component {

    state = {
        count2: 11,
    };

    handleClick2 = () => {
        this.setState(prevState => ({
            count2: prevState.count2 + 11,
        }), () => {

        });
    };

    render() {
        console.log('render     =', JSON.stringify(this.props), JSON.stringify(this.state));
        return (
            <div>
                <button type="button" onClick={this.handleClick2}>组件运行时，props改变</button>
                <span>{this.state.count2}</span>
                <Div count={this.state.count2} />
            </div>
        )
    }

}

const element = (
    <div>
        <LifecycleProps />
    </div>
);

render(element, document.getElementById('app'));