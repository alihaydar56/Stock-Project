import React, { Component } from "react";
import CartList from './CartList';
import Navbar from "./Navi";
import Categori from "./Categori";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import notFound from "./notFound";


export default class App extends Component {
  state = { currentCategori: "", products: [], sepet: [] };
  changeCategori = (categori) => {
    this.setState({ currentCategori: categori.categoryName });
    this.getProducts(categori.id);
  };

  sepeteEkle = (product) => {
    let newUrun = this.state.sepet;
    let aynıUrunmu = newUrun.find((c) => c.product.id === product.id);
    if (aynıUrunmu) {
      aynıUrunmu.quantity += 1;
    } else {
      newUrun.push({ product: product, quantity: 1 });
    }
    this.setState({ sepet: newUrun });
    alertify.success(product.productName + " sepetinize eklendi.");
  };
  sepettenSil = (product) => {
    let ürün = this.state.sepet.filter((c) => c.product.id !== product.id);
    this.setState({ sepet: ürün });
    alertify.error(product.productName + " sepetinizden silindi");
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((err) => {
        console.log("error oluştu.");
      });
  };
  render() {
    let categoriInfo = { title: "Container  List" };
    let productInfo = { title: "Product List" };
    return (
      <div>
        <Container>
          <Navbar sepettenSil={this.sepettenSil} sepet={this.state.sepet} />
          <Row>
            <Col xs="3">
              <Categori
                currentCategori={this.state.currentCategori}
                changeCategori={this.changeCategori}
                info={categoriInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      products={this.state.products}
                      sepeteEkle={this.sepeteEkle}
                      currentCategori={this.state.currentCategori}
                      info={productInfo}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/sepet"
                  render={(props) => (
                    <CartList
                      sepet={this.state.sepet} 
                      sepettenSil={this.sepettenSil} 
                    />
                  )}
                ></Route>
                <Route component={notFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
