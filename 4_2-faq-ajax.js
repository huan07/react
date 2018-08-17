/**
 * Created by yanghuan on 18/8/17.
 */

import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import axios from 'axios';


const List = function(props){
    const liComponent = props.items.map(({ id, name, price }) =>
        <li key={id}>{`${name} => ${price}`}</li>
    );

    return <ul>{liComponent}</ul>;
};


const Result = function(props){
    const { isLoading, items, error } = props;
    if (isLoading) {
        return <div>加载中...</div>;
    } else if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return <List items={items}></List>;
    }
};

{
    class MyComponent extends PureComponent {
        constructor(props){
            super(props);
            this.state = {
                isLoading: true,
                items: [],
                error: null,
            };
        }

        componentDidMount(){
            fetch('./items.json')
                .then(response => response.json())
                .then((json) => this.setState({
                    isLoading: false,
                    items: json.items || [],
                }), (error) => this.setState({
                    isLoading: false,
                    error,
                }));
        }

        render(){
            return <Result {...this.state} />;
        }
    }

    render(<MyComponent />, document.getElementById('app'));
}

{
    class MyComponent2 extends PureComponent {
        constructor(props){
            super(props);
            this.state = {
                isLoading: true,
                items: [],
                error: null,
            };
        }

        componentDidMount(){
            this.serverRequest = axios.get('./items.json')
                .then((response) => this.setState({
                        isLoading: false,
                        items: response.data.items || [],
                    })
                ).catch((error) => this.setState({
                        isLoading: false,
                        error,
                    })
                );
        }

        componentWillUnmount(){
            this.serverRequest.abort();
        }

        render(){
            return <Result {...this.state} />;
        }
    }

    render(<MyComponent2 />, document.getElementById('app2'));
}