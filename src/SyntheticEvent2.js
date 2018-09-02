import React, { PureComponent } from 'react';
import { render } from 'react-dom';

// 在事件回调被调用后，SyntheticEvent对象将被重用并且所有属性都将被取消，无法以异步方式访问该事件
{
    function ActionLink(){
        function handleClick(e){
            e.preventDefault();
            // e.persist(); 解决方式1：可以异步取值

            setTimeout(() =>{
                console.log('href => ', e.target.href);
            }, 1000);
        }

        return (
            <a href="http://www.baidu.com" onClick={handleClick}>
                Click me but will be prevented use e.preventDefault()
            </a>
        );
    }

    render(<ActionLink />, document.getElementById('app'));
}

// 解决方式2：把 event 赋值到一个内部变量上
{
    function ActionLink2(){
        function handleClick(e){
            e.preventDefault();
            const href = e.target.href;

            setTimeout(() =>{
                console.log('href => ', href);
            }, 1000);
        }

        return (
            <a href="http://www.baidu.com" onClick={handleClick}>
                Click me but will be prevented use e.preventDefault()
            </a>
        );
    }

    render(<ActionLink2 />, document.getElementById('app2'));
}
