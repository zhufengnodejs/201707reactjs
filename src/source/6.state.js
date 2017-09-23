import React,{Component} from 'react';
import ReactDOM from 'react-dom';
/**
 * 1. let clock = new Clock();
 * 2.
 */
class Clock extends Component{
  constructor(){
    super();
    this.state = {date:new Date()};//初始化默认状态
  }
  componentWillMount(){
    console.log('1. componentWillMount 组件将要挂载!');
  }
  componentDidMount(){
    console.log('3. componentDidMount 组件挂载完成!');
    this.timer = setInterval(()=>{
      //Do Not Modify State Directly,Because this can't invoke render method
      //this.state = {date:new Date()};
      this.setState({date:new Date()});
    },1000);
  }
  componentWillUnmount(){
    console.log('4. componentWillUnmount 组件将要卸载!');
    clearInterval(this.timer);
  }
  render(){
    console.log('2. render 挂载动作!');
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
);