import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component{
  constructor(){
    super();
    this.state = {number:0};
  }
  handleClick = ()=>{
    this.setState({number:this.state.number+1});
  }
  render(){
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));
