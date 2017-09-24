import React, {Component} from 'react';
import './index.css'
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