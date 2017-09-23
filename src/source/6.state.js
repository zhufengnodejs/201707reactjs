import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component{
  constructor(){
    super();
    this.state = {date:new Date()};//初始化默认状态
  }
  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);