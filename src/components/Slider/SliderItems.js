import React,{Component} from 'react';
export default class SliderItems extends Component{
    render(){
      let style = {
        left:-500*this.props.index+'px',
        width:500*this.props.images.length+'px',
        transitionDuration:this.props.speed+'s'
      }
        return (
          <ul style={style} className="sliders">
            {
              this.props.images.map((image,index)=>(
                <li className="slider">
                  <img src={image} />
                </li>
              ))
            }
          </ul>
        )
    }
}