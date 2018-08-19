/**
 * Created by yanghuan on 18/8/19.
 */

import React from 'react';
import { render } from 'react-dom';

// 动态 Context
{

    const themes = {
        light: {
            foreground: '#000000',
            background: '#eeeeee',
        },
        dark: {
            foreground: '#ffffff',
            background: '#222222',
        },
    };

    const ThemeContext = React.createContext(
        themes.dark
    );

    function ThemedButton(props){
        return (
            <ThemeContext.Consumer>
                {
                    value => (
                        <button
                            {...props}
                            theme={value}
                            type="button"
                            style={{ background: value.background }}
                        >
                            按钮
                        </button>
                    )
                }
            </ThemeContext.Consumer>
        );
    }

    function Toolbar(props){
        return (
            <ThemedButton onClick={props.changeTheme}>
                Change Theme
            </ThemedButton>
        );
    }

    class App extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                theme: themes.light,
            };
        }

        toggleTheme = () =>{
            this.setState(state => ({
                    theme: state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
                })
            );
        };

        render(){
            return (
                <div>
                    <ThemeContext.Provider value={this.state.theme}>
                        <Toolbar changeTheme={this.toggleTheme} />
                    </ThemeContext.Provider>
                    <ThemedButton />
                </div>
            );
        }
    }

    render(<App />, document.getElementById('app'));
}