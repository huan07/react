/**
 * Created by yanghuan on 17/7/15.
 */

import React, { PureComponent } from 'react';
import { render } from 'react-dom';

// 1.受控组件（input textarea select 都接受一个 value 属性可以用来实现一个受控组件）
class NameForm extends PureComponent {
    constructor(props){
        super(props);
        this.state = { value: 'grapefruit' };

        /*  函数的默认传参数 =>event   可以在构造函数绑定this */
        this.handleChange = ::this.handleChange;
        this.handleSumbit = ::this.handleSumbit;
    }

    handleChange(event){ /* 默认传参数 */
        this.setState({ value: event.target.value, })
    }

    handleSumbit(event){/* 避免form的自带属性，一般将提交事件绑定在按钮 onClick触发 */
        alert(`A name was submitted ${this.state.value}`);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSumbit}>
                <label>
                    input:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label>
                    textarea:
                    <textarea
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label>
                    select:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <br />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

render(
    <NameForm />,
    document.getElementById('app')
);


// 2.处理多个输入元素
// setState() 自动将部分状态合并到当前状态，所以我们只需要调用 更改的部分 即可。
class NameForm2 extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
        };

        this.handleInputChange = ::this.handleInputChange;
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    render(){
        return (
            <form style={{ margin: '40px 0' }}>
                <label>
                    is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />

                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        );
    }
}

render(
    <NameForm2 />,
    document.getElementById('app2')
);