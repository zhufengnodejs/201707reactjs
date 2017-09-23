import React from 'react';
import ReactDOM from 'react-dom';
//Import in body of module; reorder to top  import/first
/**
 * 1.画页面
 * 2.
 */
class App extends React.Component{
  constructor(){
    super();
    this.state = {result:0};
  }
  handleChange = (event)=>{
    let a = this.refs.a.value||0;
    let b = this.refs.b.value||0;
    this.setState({result:parseFloat(a)+parseFloat(b)});
  }
  render(){
    return (
      <div>
        <input ref="a" type="text" onChange={this.handleChange}/>
        +
        <input ref="b" type="text" onChange={this.handleChange}/>
        <p>{this.state.result}</p>
      </div>
    )
  }
}
ReactDOM.render(<App></App>,document.querySelector('#root'));
