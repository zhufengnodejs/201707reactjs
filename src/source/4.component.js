import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1.函数组件
 *   就是一个普通函数，传入任意的参数(props)，返回React元素
 * 2. 类组件
 */
/*function Welcome({name,age}){
  return <h1>{name}:{age}</h1>;
}*/
class Welcome extends React.Component{
  render(){//也需要返回一个React元素
    return <h1>{this.props.name}:{this.props.age}</h1>;
  }
}
ReactDOM.render(<Welcome name="zfpx" age="6"/>,document.querySelector('#root'));
