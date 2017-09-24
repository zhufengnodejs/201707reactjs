import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
/**
 * 1.初始化一个状态对象 {words:[]}
 * 2.给input框架绑定事件，当input的值发生改变的时候，调用百度的接口获取返回的数组。并且修改状态。
 */
class App extends React.Component{
  render(){
    return (
      <div className="container" style={{marginTop:'20px'}}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input type="text" className="form-control"/>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  <li className="list-group-item">1</li>
                  <li className="list-group-item">2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}
ReactDOM.render(<App></App>,document.querySelector('#root'));
