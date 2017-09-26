import React, {Component} from 'react';
import './index.css'
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";
export default class Slider extends Component {
  constructor(){
    super();
    this.state = {index:0};
  }
  componentDidMount(){
    this.sliders = document.querySelector('.sliders');
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
    console.log(this.sliders);
    let index = this.state.index;
    index+=step;
    if(index > this.props.images.length){
      this.sliders.style.transitionDuration = '0s';
      this.sliders.style.left = 0;
      //只有强行调用此方法的时候才会强制浏览器重新真正计算left值
      getComputedStyle(this.sliders,null).left;
      this.sliders.style.transitionDuration = this.props.speed+'s';
      this.setState({index:1});
      return;
    }
    if(index<0){
      this.sliders.style.transitionDuration = '0s';
      this.sliders.style.left = this.props.images.length*-500+'px';
      //只有强行调用此方法的时候才会强制浏览器重新真正计算left值
      getComputedStyle(this.sliders,null).left;
      this.sliders.style.transitionDuration = this.props.speed+'s';
      this.setState({index:this.props.images.length-1});
      return;
    }
    this.setState({index});
  }
  render() {
    return (
      <div
        onMouseOver={this.props.pause?()=>clearInterval(this.timer):null}
        onMouseOut={this.props.pause?this.go:null}
        className="slider-wrapper">
        <SliderItems index={this.state.index}
                     images={this.props.images}
                     speed={this.props.speed}
        />
        {this.props.arrow&&<SliderArrows turn={this.turn}/>}
        {this.props.dots&&<SliderDots turn={this.turn}                                       index={this.state.index}
                                      images={this.props.images}/>}

      </div>
    )
  }
}