import React from 'react';
import ReactDOM from 'react-dom';
/**
 * React元素是只读的,不能修改
 * 写一个时钟，每秒变一次，因为React元素是不可变的，所以需要每秒创建一个新的元素并再次渲染
 */
function tick(){
  let clock = <div>
    <span>时间:</span>
    <span>{new Date().toLocaleString()}</span>
    </div>;
  ReactDOM.render(clock,document.querySelector('#root'));
}
setInterval(tick,1000);


