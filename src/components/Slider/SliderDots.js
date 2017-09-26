import React, {Component} from 'react';
export default class SliderDots extends Component {
  render() {
    return (
      <div className="dots">
        {
          this.props.images.map((item,index)=>(
            <span key={index} className={"dot "+(this.props.index==index||(this.props.index == this.props.images.length&&index==0)?"active":"")}
                  onClick={()=>this.props.turn(index-this.props.index)}
            >{index+1}</span>
          ))
        }
      </div>
    )
  }
}