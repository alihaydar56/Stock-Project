import React, { Component } from 'react';
import {Table,Button} from 'reactstrap';

export default class ProductList extends Component {

    
    
    render() {
        return (
            <div>
                <h5>{this.props.info.title}-{this.props.currentCategori}</h5>
                <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>quantity PerUnit</th>
          <th>unitPrice</th>
          <th>unitsInStock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {this.props.products.map(product =>(
         
            <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.props.sepeteEkle(product)} color="info">ekle</Button></td>
            </tr>
        ))}
       
        
        
        
      </tbody>
    </Table>
            </div>
        )
    }
}
