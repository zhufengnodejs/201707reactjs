import React from 'react';
import ReactDOM from 'react-dom';
function formatDate(date){
  return date.toLocaleDateString();
}
function Avatar({author}){
  return (
    <img style={{width:'25px',height:'25px',borderRadius:'5px'}} className="Avatar"
         src={author.avatarUrl}
         alt={author.name}
    />
  )
}
function UserInfo(props){// = {author}
  return (
    <div className="UserInfo">
      <Avatar author={props.author}/>
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  )
}
function CommentText({text}){
  return (
    <div className="Comment-text">
      {text}
    </div>
  )
}
function CommentDate({date}){
  return (
    <div className="Comment-date">
      {formatDate(date)}
    </div>
  )
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author}/>
      <CommentText text={props.text}/>
      <CommentDate date={props.date}/>
    </div>
  );
}
let comment = {
  author:{name:'张三',avatarUrl:'https://avatars0.githubusercontent.com/u/20297227?v=4&s=460'},
  text:"评论内容",
  date:new Date()
}
ReactDOM.render(<Comment {...comment}/>,document.querySelector('#root'));
