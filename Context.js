/**
 * Created by yanghuan on 18/8/6.
 */

import React from 'react';
import { render } from 'react-dom';

// Context 旨在共享一个组件树内可被视为 “全局” 的数据
{
    function ThemedButton(props){
        return (
            <button
                theme={props.theme}
                type="button"
                style={{ background: props.theme }}
            >
                按钮
            </button>
        );
    }

    function Toolbar(props){
        return <ThemedButton theme={props.theme} />;
    }

    class App extends React.Component {
        render(){
            return <Toolbar theme="black" />;
        }
    }

    render(<App />, document.getElementById('app'));
}

// 改造后
// 使用 context, 我们可以避免通过中间元素传递 props
{
    const ThemeContext = React.createContext('light');

    function ThemedButton(props){
        return (
            <ThemeContext.Consumer>
                {
                    value => (
                        <button
                            {...props}
                            theme={value}
                            type="button"
                            style={{ background: value }}
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

    class App2 extends React.Component {
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