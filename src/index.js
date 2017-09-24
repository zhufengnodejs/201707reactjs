import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';
let IMAGES = [
  require('./1.jpg'),
  require('./2.jpg'),
  require('./3.jpg')
]
ReactDOM.render(<Slider
  images={IMAGES} //需要轮播的图片
  delay={2}       //每次轮播的间隔
  speed={1.2}     //轮播一次需要多长时间
  auto={true}     //是否自动轮播
  pause={true}    //当鼠标移动到轮播上后自动停止轮播
  arrow={true}    //是否显示左右箭头导航
  dots={true}     //是否显示点状导航
/>,document.querySelector('#root'));