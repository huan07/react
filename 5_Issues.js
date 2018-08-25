import React, { PureComponent } from 'react';
import { render } from 'react-dom';

{
    function ActionLink(){
        function handleClick(e){
            e.preventDefault();

            setTimeout(() =>{
                console.log('href => ', e.target.href);  // 每次事件回调完成后，SyntheticEvent 会被重置 ? ?
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

// 解决方式：把 event 赋值到一个内部变量上
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
