import React, {Component} from 'react';
export default class ProductTable extends Component {
  render() {
    let rows = [];//存放所有的行tr
    let lastCategory;
    for(let i=0;i<this.props.products.length;i++){
      let product = this.props.products[i];
      if(product.category!=lastCategory){//如果当前产品的分类不等于lastCategory，就相当于开启了一个新的分类,输出一个分类行
        rows.push(<tr key={"category-"+i}><td style={{fontWeight:'bold'}} colSpan={2}>{product.category}</td></tr>);
        lastCategory = product.category;
      }
      rows.push(<tr key={i}><td style={{"color":product.stocked?"black":"red"}}>{product.name}</td><td>{product.price}</td></tr>);
    }

    return (
      <table>
        <thead>
          <tr>
            <th style={{fontWeight:'bold'}}>Name</th>
            <th style={{fontWeight:'bold'}}>Price</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    )
  }
}