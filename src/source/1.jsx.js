import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 在JSX中内嵌表达式
 * 表达是一些变量和运算符的组合。也可以是方法的调用，总之需要返回一个值
 * React元素 用来描述UI的模样
 * @param user
 * @returns {string}
 */
function format(user){
  return `${user.firstName}${user.lastName}`;
}
let user = {firstName:'张',lastName:'三',avatar:'https://www.baidu.com/img/bd_logo1.png'};
function greeting(user){
  if(user){
    return <h1>hello {format(user)}</h1>;
  }else{
    return <h1>hello stranger</h1>
  }
}
ReactDOM.render(<div>
  <img src="{user.avatar}"/>
  <a style={{background:'red',height:'100px'}} tabIndex={2}>2</a>
  <a style={{background:'yellow',height:'100px'}} tabIndex={1}>1</a>
  <a style={{background:'blue',height:'100px'}} tabIndex={0}>0</a>
</div>,document.querySelector('#root'));
