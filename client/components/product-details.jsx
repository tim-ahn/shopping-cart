import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.getProductDetails = this.getProductDetails.bind(this);
    this.convertToDollars = this.convertToDollars.bind(this);
  }

  getProductDetails(id) {
    fetch('/api/products/' + id)
      .then(res => res.json())
      .then(result => {
        // eslint-disable-next-line no-console
        console.log(result);
        this.setState({ product: result });
      })
      .catch(error => console.error(error));
  }

  convertToDollars(price) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    const convertedPrice = formatter.format(price / 100);
    return convertedPrice;
  }

  componentDidMount() {
    // this.getProductDetails(this.props.productId);
    this.getProductDetails(1);
  }

  render() {
    return (
      <div className="card border border-light m-4">
        <div className="ml-4" onClick={() => this.props.setView('details')}> &lt; Back to catalog </div>
        <div className="card-body">
          <img src={this.state.product.image} className="col-sm-4 pr-4 card-img-top float-left object-fit p-2" alt=""></img>
          <h3 className="card-title">{this.state.product.name}</h3>
          <div className="card-subtitle">{this.convertToDollars(this.state.product.price)}</div>
          <div className="card-text">{this.state.product.shortDescription}</div>

        </div>
        <div className="card-text pb-4 px-4">{this.state.product.longDescription}</div>

      </div>

    );
  }
}
export default ProductDetails;
