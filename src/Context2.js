/**
 * Created by yanghuan on 18/8/19.
 */

import React, { Component, createContext } from 'react';
import { render } from 'react-dom';

// 动态 Context
{
    const themes = {
        light: {
            background: 'pink',
        },
        dark: {
            background: 'black',
        },
    };

    const ThemeContext = createContext(themes.dark);
    const { Provider, Consumer } = ThemeContext;

    function ThemedButton(props){
        return (
            <Consumer>
                {
                    value => (
                        <button
                            {...props}
                            type="button"
                            style={{ background: value.background }}
                            theme={value}
                        >
                            {props.children || '按钮'}
                        </button>
                    )
                }
            </Consumer>
        );
    }

    function Toolbar(props){
        return (
            <ThemedButton onClick={props.changeTheme}>
                Change Theme
            </ThemedButton>
        );
    }

    class App extends Component {
        constructor(props){
            super(props);
            this.state = {
                theme: themes.light,
            };
        }

        toggleTheme = () =>{
            this.setState(prevState => ({
                    theme: prevState.theme === themes.dark
                        ? themes.light
                        : themes.dark,
                })
            );
        };

        render(){
            return (
                <div>
                    <Provider value={this.state.theme}>
                        <Toolbar changeTheme={this.toggleTheme} />
                    </Provider>
                    <ThemedButton />
                </div>
            );
        }
    }

    render(<App />, document.getElementById('app'));
}

// to add others