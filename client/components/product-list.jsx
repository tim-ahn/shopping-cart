import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
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

  render() {
    if (this.state.products.length > 0) {
      return (
        <div className="card-columns flex-wrap ml-4">
          {
            this.state.products.map((product, index) =>
              (
                <ProductListItem
                  key={index}
                  setView={this.props.setView}
                  convertToDollars={this.props.convertToDollars}
                  product={product}

                />
              )
            )
          }
        </div>
      );
    } else {
      return null;
    }
  }
}
export default ProductList;
