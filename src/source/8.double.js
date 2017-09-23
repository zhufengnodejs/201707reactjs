import React from 'react';
import ReactDOM from 'react-dom';
class Input extends React.Component{
  render(){
    return (
      <div>
        <p></p>
        <input type="text"/>
      </div>
    )
  }
}
ReactDOM.render(<Input/>,document.querySelector('#root'));
