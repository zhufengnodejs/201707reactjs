import React,{Component} from 'react';
export default class SearchBar extends Component{
    render(){
        return (
            <div>
                <input onChange={event=>this.props.changeKeyword(event.target.value)} type="text"/><br/>
                <input onChange={event=>this.props.changeOnlyStock(event.target.checked)} type="checkbox"/> only show products in stock
            </div>
        )
    }
}