import React, {Component} from 'react';
export default class SliderDots extends Component {
  render() {
    return (
      <div className="dots">
        {
          this.props.images.map((item,index)=>(
            <span className={"dot "+(this.props.index==index?"active":"")}
                  onClick={()=>this.props.turn(index-this.props.index)}
            >{index+1}</span>
          ))
        }
      </div>
    )
  }
}