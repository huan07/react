/**
 * Created by yanghuan on 18/8/18.
 */
import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import throttle from 'lodash.throttle';

import debounce from 'lodash.debounce';

import rafSchedule from 'raf-schd';


// 怎样避免函数被调用太快或者太多次

// Throttle（节流）
// 节流是阻止函数在给定时间内被多次调用。
{
    class LoadMoreButton extends PureComponent {
        constructor(props){
            super(props);
            this.handleClick = ::this.handleClick;
            this.handleClickThrottled = throttle(this.handleClick, 1000);
        }

        componentWillUnmount(){
            this.handleClickThrottled.cancel();
        }

        render(){
            return <button onClick={this.handleClickThrottled}>Load More</button>;
        }

        handleClick(){
            this.props.loadMore();
        }
    }

    render(<LoadMoreButton loadMore={() => console.log('loadMore')} />, document.getElementById('app'));
}

// Debounce（防抖）
// 防抖确保函数上次执行后的一段时间内，不会再次执行。
{
    class Searchbox extends PureComponent {
        constructor(props){
            super(props);
            this.handleChange = ::this.handleChange;
            this.emitChangeDebounced = debounce(this.emitChange, 250);
        }

        componentWillUnmount(){
            this.emitChangeDebounced.cancel();
        }

        render(){
            return (
                <input
                    type="text"
                    onChange={this.handleChange}
                    placeholder="Search..."
                    defaultValue={this.props.value}
                />
            );
        }

        handleChange(e){
            this.emitChangeDebounced(e.target.value);
        }

        emitChange(value){
            this.props.onChange(value);
        }
    }

    render(<Searchbox onChange={() => console.log('onChange')} />, document.getElementById('app2'));
}

// requestAnimationFrame节流
// requestAnimationFrame 是在浏览器中排队等待执行的一种方法，它可以在呈现性能的最佳时间执行。
{
    class ScrollListener extends PureComponent {
        constructor(props){
            super(props);
            this.handleScroll = ::this.handleScroll;

            this.scheduleUpdate = rafSchedule(
                point => this.props.onScroll(point)
            );
        }

        handleScroll(e){
            this.scheduleUpdate({ x: e.clientX, y: e.clientY });
        }

        componentWillUnmount(){
            this.scheduleUpdate.cancel();
        }

        render(){
            return (
                <div
                    style={{ overflow: 'scroll', margin: '150px 0' }}
                    onScroll={this.handleScroll}
                >
                    <img src="./image.jpg" />
                </div>
            );
        }
    }

    render(<ScrollListener onScroll={() => console.log('onScroll')} />, document.getElementById('app3'));
}