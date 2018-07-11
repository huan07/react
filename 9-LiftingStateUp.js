/**
 * Created by yanghuan on 17/7/15.
 */

import React, { PureComponent } from 'react';
import { render, } from 'react-dom';

// 同一个数据的变化需要几个不同的组件来反映。
// 建议提升 共享的状态 到它们最近的祖先组件中（状态提升）


function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){ /*  传函数 ＝＝＝＝＝＝＝*/
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function BoilingVerdict(props){
    if (props.celsius >= 100) {
        return <p>The water would boil</p>;
    }
    return <p>The water would not boil</p>;
}

class TemperatureInput extends PureComponent {
    constructor(props){
        super(props);
        this.handleChange = ::this.handleChange;
    }

    handleChange(event){
        this.props.onTemperatureChange(event.target.value);
        /*  ＝＝＝＝＝＝＝*/
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}

class Calculator extends PureComponent {
    constructor(props){
        super(props);
        this.state = { temperature: '', scale: 'c', }; // 两个输入的 “单一数据来源” ！！
        this.handleCelsiusChange = ::this.handleCelsiusChange;
        this.handleFahrenheitChange = ::this.handleFahrenheitChange;
    }

    handleCelsiusChange(temperature){
        this.setState({ scale: 'c', temperature, });
        /*＝＝＝＝＝＝＝＝＝＝＝＝*/
    }

    handleFahrenheitChange(temperature){
        this.setState({ scale: 'f', temperature, });
        /*＝＝＝＝＝＝＝＝＝＝＝＝＝*/
    }

    render(){
        const { temperature, scale, } = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius}
                                  onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit}
                                  onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

render(
    <Calculator />,
    document.getElementById('app')
);