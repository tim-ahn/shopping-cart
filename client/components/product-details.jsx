import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails() {
    fetch('/api/products/productId')
      .then(res => res.json())
      .then(result => {
        this.setState({ product: result });

      })
      .catch(error => console.error(error));
  }

  render() {
    return null;
  }
}
export default ProductDetails;
