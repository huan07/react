/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';

// 1.受控组件（input textarea select）

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'grapefruit', };
        this.handleSumbit = this.handleSumbit.bind(this);
        /*函数的默认传参数可以在构造函数绑定this*/
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value, })
    }

    handleSumbit(event) {
        alert(`A name was submitted ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <label>
                    input:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br /><br />

                <label>
                    textarea:
                    <textarea type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br /><br />

                <label>
                    select:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <br /><br />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

render(
    <NameForm />,
    document.getElementById('app')
);


