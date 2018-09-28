/**
 * Created by yanghuan on 18/8/6.
 */

import React, { Component, createContext } from '../react.js';
import { render } from '../react-dom.js';

// Context 旨在共享一个组件树内可被视为 “全局” 的数据
{
    function ThemedButton(props){
        return (
            <button
                type="button"
                style={{ background: props.theme }}
                theme={props.theme}
            >
                按钮
            </button>
        );
    }

    function Toolbar(props){
        return <ThemedButton theme={props.theme} />;
    }

    class App extends Component {
        render(){
            return <Toolbar theme="black" />;
        }
    }

    render(<App />, document.getElementById('app'));
}

// 改造后
// 使用 context, 我们可以避免通过中间组件传递 props
{
    const ThemeContext = createContext('light');

    function ThemedButton(props){
        return (
            <ThemeContext.Consumer>
                {
                    value => (
                        <button
                            {...props}
                            type="button"
                            style={{ background: value }}
                            theme={value}
                        >
                            按钮
                        </button>
                    )
                }
            </ThemeContext.Consumer>
        );
    }

    function Toolbar(props){
        return <ThemedButton />;
    }

    class App2 extends Component {
        render(){
            return (
                <ThemeContext.Provider value="red">
                    <Toolbar />
                </ThemeContext.Provider>
            );
        }
    }

    render(<App2 />, document.getElementById('app2'));
}