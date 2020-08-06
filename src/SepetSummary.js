import React from "react";
import {Link} from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";


export default class SepetSummary extends React.Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Sepet
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.sepet.map((item) => (
              <DropdownItem key={item.product.id}>
                <Badge
                  onClick={() => this.props.sepettenSil(item.product)}
                  color="danger"
                >
                  x
                </Badge>
                {item.product.productName}-
                <Badge color="primary">{item.quantity}</Badge>
              </DropdownItem>
            ))}

            <DropdownItem divider />
            <DropdownItem>
              <Link to="sepet">Sepete git</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}
