import React, { Component } from "react";
import { Table,Button } from "reactstrap";
export default class CartList extends Component {
  renderSepet() {
    return (
      <Table stripped>
        <thead >
          <tr>
            <th>#</th>
            <th>categori Id</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.sepet.map((sepetItem) => (
            <tr key={sepetItem.product.id}>
              <th>{sepetItem.product.id}</th>
              <th>{sepetItem.product.categoryId}</th>
              <th>{sepetItem.product.productName}</th>
              <th>{sepetItem.product.unitPrice}</th>
              <th>{sepetItem.product.unitsInStock}</th>
              <th>{sepetItem.quantity}</th>
              <th>
                <Button color="danger" onClick={()=> this.props.sepettenSil(sepetItem.product)}>Remove</Button>
                </th>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderSepet()}</div>;
  }
}
