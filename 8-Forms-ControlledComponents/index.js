/**
 * Created by yanghuan on 17/7/15.
 */

import React from 'react';
import { render, } from 'react-dom';

// 1.受控组件（input textarea select 都接受一个 value 属性可以用来实现一个受控组件）

// 2.处理多个输入元素
// setState() 自动将部分状态合并到当前状态，所以我们只需要调用更改的部分即可。

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'grapefruit', };
        this.handleSumbit = this.handleSumbit.bind(this);
        /*函数的默认传参数=>event可以在构造函数绑定this*/
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) { /* 默认传参数 */
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
                    <textarea value={this.state.value} onChange={this.handleChange} />
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

class NameForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <form>
                <label>
                    is going:
                    <input name="isGoing" type="checkbox"
                           checked={this.state.isGoing}
                           onChange={this.handleInputChange}
                    />
                </label>
                <br /><br />

                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests" type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br /><br />
            </form>
        )
    }
}

render(
    <NameForm2 />,
    document.getElementById('app')
);