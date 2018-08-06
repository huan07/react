/**
 * Created by yanghuan on 18/8/6.
 */
import React, { PureComponent }from 'react';
import { render } from 'react-dom';

// 动机：
// 为一个组件返回一个子元素列表

{
    class Columns extends PureComponent {
        render(){
            return (
                <div>
                    <td>Hello Fragment</td>
                    <td>World Fragment</td>
                </div>
            );
        }
    }

    class Table extends PureComponent {
        render(){
            return (
                <table>
                    <tbody>
                    <tr>
                        <Columns />
                    </tr>
                    </tbody>
                </table>
            );
        }
    }

    render(<Table />, document.getElementById('app2'));
}

// 改良版
// 更简介版本<></> 目前许多工具都不支持这个简写语法
{
    class Columns extends PureComponent {
        render(){
            return (
                <React.Fragment>
                    <td>Hello Fragment</td>
                    <td>World Fragment</td>
                </React.Fragment>
            );
        }
    }

    class Table extends PureComponent {
        render(){
            return (
                <table>
                    <tbody>
                    <tr>
                        <Columns />
                    </tr>
                    </tbody>
                </table>
            );
        }
    }

    render(<Table />, document.getElementById('app2'));
}