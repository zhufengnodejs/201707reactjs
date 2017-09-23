import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1. State Updates May Be Asynchronous
 */
class ChildCounter extends React.Component{
 render(){
   return (
     <div  style={{border:'3px solid green'}}>
        <p>{this.props.count}</p>
     </div>
   )
 }
}
/**
 * 1.先放那些静态方法
 * 2.构造函数
 * 3.生命周期函数
 */
class Counter extends React.Component{
  //1.默认属性对象
  static defaultProps = {
    number:5
  }
  constructor(props){
    super(props);
    //2.获取初始状态
    this.state = {number:props.number};
  }
  componentWillMount(){
    console.log('3.componentWillMount 组件将要挂载!');
  }
  componentDidMount(){
    console.log('5.componentDidMount 组件挂载完成!');
  }
  handleClick = ()=>{
    //1.this.setState方法是异步的
    //2.State Updates are Merged
   this.setState({number:this.state.number+1});
  }

  render(){
    console.log('4.render 渲染');
    return (
      <div style={{border:'3px solid red'}}>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
        <ChildCounter count={this.state.number}/>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>,document.querySelector('#root'));
