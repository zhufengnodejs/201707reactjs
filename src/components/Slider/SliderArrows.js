import React,{Component} from 'react';
export default class SliderArrows extends Component{
    render(){
        return (
            <div className="arrows">
              <span
                onClick={()=>this.props.turn(-1)}
                className="arrow">&lt;</span>
              <span
                onClick={()=>this.props.turn(1)}
                className="arrow">&gt;</span>
            </div>
        )
    }
}