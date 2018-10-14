/**
 * Created by yanghuan on 18/8/18.
 */

import React, { PureComponent } from '../react.js';
import { render } from '../react-dom.js';

const A = 65;

// 通过箭头函数传递参数
{
    class Alphabet extends PureComponent {
        constructor(props){
            super(props);
            this.handleClick = ::this.handleClick;
            this.state = {
                justClicked: null,
                letters: Array.from({ length: 2 }, (_, i) => String.fromCharCode(A + i))
            };
        }

        handleClick(justClicked){
            this.setState({ justClicked });
        }

        render(){
            return (
                <div>
                    Just clicked: {this.state.justClicked}
                    <ul>
                        {
                            this.state.letters.map(letter =>
                                <li key={letter} onClick={() => this.handleClick(letter)}>
                                    {letter}
                                </li>
                            )
                        }
                    </ul>
                </div>
            );
        }
    }

    render(<Alphabet />, document.getElementById('app'));
}

// 通过data-属性传递参数
{
    class Alphabet2 extends PureComponent {
        constructor(props){
            super(props);
            this.handleClick = ::this.handleClick;
            this.state = {
                justClicked: null,
                letters: Array.from({ length: 2 }, (_, i) => String.fromCharCode(A + i))
            };
        }

        handleClick(e){
            this.setState({
                justClicked: e.target.dataset.letter,
            });
        }

        render(){
            return (
                <div>
                    Just clicked 2: {this.state.justClicked}
                    <ul>
                        {
                            this.state.letters.map(letter =>
                                <li key={letter} data-letter={letter} onClick={this.handleClick}>
                                    {letter}
                                </li>
                            )
                        }
                    </ul>
                </div>
            );
        }
    }

    render(<Alphabet2 />, document.getElementById('app2'));
}