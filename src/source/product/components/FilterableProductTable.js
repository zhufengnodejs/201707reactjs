import React,{Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterableProductTable extends Component{
    constructor(){
      super();
      this.state = {keyword:'',onlyStock:false};
    }
    render(){
        return (
            <div style={{margin:'30px auto',width:'60%'}}>
              <SearchBar/>
              <ProductTable products={this.props.products}/>
            </div>
        )
    }
}