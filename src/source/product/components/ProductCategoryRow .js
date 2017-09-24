import React,{Component} from 'react';
export default class ProductCategoryRow  extends Component{
    render(){
        return (
          <tr ><td style={{fontWeight:'bold'}} colSpan={2}>{this.props.category}</td></tr>
        )
    }
}