import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.convertToDollars = this.convertToDollars.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  convertToDollars(price) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    const convertedPrice = formatter.format(price / 100);
    return convertedPrice;
  }

  render() {
    return (
      <div className="card-columns flex-wrap ml-4">
        {
          this.state.products.map(products =>
            (
              <ProductListItem
                key={products.productId}
                image={products.image}
                name={products.name}
                price={this.convertToDollars(products.price)}
                shortDescription={products.shortDescription} />
            )
          )
        }
      </div>

    );
  }
}
export default ProductList;
