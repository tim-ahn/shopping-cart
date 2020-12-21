import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      hover: false
    };
    this.getProducts = this.getProducts.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  getProducts() {
    const path = '/api/products';
    fetch(path)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  componentDidMount() {
    this.getProducts();
  }

  changeBackground(event) {
    event.target.style.backgroundColor = 'aqua !important';
  }

  render() {
    if (this.state.products.length > 0) {
      return (
        <div className="container">
          <div className="row ">
            <div className="card-deck">
              {
                this.state.products.map((product, index) =>
                  (
                    <ProductListItem

                      onMouseOver={this.changeBackground}
                      key={index}
                      setView={this.props.setView}
                      convertToDollars={this.props.convertToDollars}
                      product={product}
                    />
                  )
                )
              }
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
