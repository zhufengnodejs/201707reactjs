import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1. State Updates May Be Asynchronous
 */
class ChildCounter extends React.Component{
 componentWillUnmount(){
    console.log('ChildCounter componentWillUnmount 组件将要卸载!');
 }
 shouldComponentUpdate(newProps,newState){
   if(newProps.count<7){
     return true;
   }
   return false;
 }
 componentWillReceiveProps(){
   console.log('ChildCounter componentWillReceiveProps 组件将要接收新的属性!');
 }
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
  shouldComponentUpdate(newProps,newState){
    console.log('6.shouldComponentUpdate 组件是否要更新!');
    //如果更新后的状态小于10则进行更新视图
    if(newState.number<10){
      return true;
    }
    return false;//否则不更新
  }
  componentWillUpdate(){
    console.log('7.componentWillUpdate 组件将要更新');
  }

  componentDidUpdate(){
    console.log('8.componentDidUpdate 组件更新完成');
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
        {
          this.state.number<8?<ChildCounter count={this.state.number}/>:null
        }

      </div>
    )
  }
}

ReactDOM.render(<Counter/>,document.querySelector('#root'));
