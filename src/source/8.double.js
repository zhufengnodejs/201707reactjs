import React from 'react';
import ReactDOM from 'react-dom';
//受控组件 值受控制
class Input extends React.Component{
  constructor(){
    super();
    this.state = {val:''};
  }
  render(){
    return (
      <div>
        <p>{this.state.val}</p>
        <input onChange={(event)=>{
          this.setState({val:event.target.value});
        }} value={this.state.val} type="text"/>
      </div>
    )
  }
}
ReactDOM.render(<Input/>,document.querySelector('#root'));
