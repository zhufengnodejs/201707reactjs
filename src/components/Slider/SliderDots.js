import React, {Component} from 'react';
export default class SliderDots extends Component {
  render() {
    return (
      <div className="dots">
        {
          this.props.images.map((item,index)=>(
            <span className="dot">{index+1}</span>
          ))
        }
      </div>
    )
  }
}