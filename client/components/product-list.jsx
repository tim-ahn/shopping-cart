import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/health-check')
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  render() {
    return (
      <div className="card-deck cardgroup">
        {
          this.state.products.map(products =>
            (
              <ProductListItem key={products.productId} image={products.image} name={products.name} price={products.price} shortDescription={products.shortDescription} />
            )
          )
        }
      </div>

    );
  }
}
export default ProductList;
