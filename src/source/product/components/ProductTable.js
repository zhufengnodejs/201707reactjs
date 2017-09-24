import React, {Component} from 'react';
import ProductCategoryRow from "./ProductCategoryRow ";
import ProductRow from "./ProductRow";
export default class ProductTable extends Component {
  render() {
    let rows = [];//存放所有的行tr
    let lastCategory;
    for(let i=0;i<this.props.products.length;i++){
      let product = this.props.products[i];
      if(product.category!==lastCategory){//如果当前产品的分类不等于lastCategory，就相当于开启了一个新的分类,输出一个分类行
        rows.push(<ProductCategoryRow key={"category-"+i} category={product.category}/>);
        lastCategory = product.category;
      }
      rows.push(<ProductRow key={i} product={product}/>);
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