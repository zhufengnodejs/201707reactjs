import React, {Component} from 'react';
import './index.css'
export default class Slider extends Component {
  constructor(){
    super();
    this.state = {index:0};
  }
  render() {
    let style = {
      left:-500*this.state.index+'px',
      width:500*this.props.images.length+'px',
      transitionDuration:this.props.speed+'s'
    }
    return (
      <div className="slider-wrapper">
        <ul style={style} className="sliders">
          {
            this.props.images.map((image,index)=>(
              <li className="slider">
                <img src={image} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}