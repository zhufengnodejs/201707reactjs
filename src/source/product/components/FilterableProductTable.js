import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {keyword: '', onlyStock: false};
  }
  //改变当前状态的关键字
  changeKeyword = (keyword) => {
    this.setState({keyword});
  }
  //改变是否只显示有存货的商品
  changeOnlyStock = (onlyStock) => {
    this.setState({onlyStock});
  }

  render() {
    return (
      <div style={{margin: '30px auto', width: '60%'}}>
        <SearchBar  changeKeyword={this.changeKeyword} changeOnlyStock={this.changeOnlyStock}/>
        <ProductTable keyword={this.state.keyword} onlyStock={this.state.onlyStock}  products={this.props.products}/>
      </div>
    )
  }
}