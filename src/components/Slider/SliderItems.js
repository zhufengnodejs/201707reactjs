import React,{Component} from 'react';
export default class SliderItems extends Component{
    render(){
      let style = {
        left:-500*this.props.index+'px',
        width:500*(this.props.images.length+1)+'px',
        transitionDuration:this.props.speed+'s'
      }
        return (
          <ul style={style} className="sliders">
            {
              this.props.images.map((image,index)=>(
                <li key={index} className="slider">
                  <img src={image} />
                </li>
              ))
            }
            <li className="slider" key={this.props.images.length}>
              <img src={this.props.images[0]}   />
            </li>
          </ul>
        )
    }
}