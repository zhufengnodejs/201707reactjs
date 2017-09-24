import React, {Component} from 'react';
import './index.css'
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
export default class Slider extends Component {
  constructor(){
    super();
    this.state = {index:0};
  }
  componentDidMount(){
    if(this.props.auto){//如果要自动启动轮播的话
        this.go();//开始轮播
    }
  }
  go = ()=>{
    this.timer = setInterval(()=>{
      this.turn(1);
    },this.props.delay*1000);
  }
  //step是步长，走几步
  turn = (step)=>{
    let index = this.state.index;
    index+=step;
    if(index>=this.props.images.length){
      index = 0;
    }
    this.setState({index});
  }
  render() {

    return (
      <div className="slider-wrapper">
        <SliderItems index={this.state.index}
                     images={this.props.images}
                     speed={this.props.speed}
        />
        <SliderArrows/>
      </div>
    )
  }
}