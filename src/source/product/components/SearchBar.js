import React,{Component} from 'react';
export default class SearchBar extends Component{
    render(){
        return (
            <div>
                <input type="text"/><br/>
                <input type="checkbox"/> only show products in stock
            </div>
        )
    }
}