import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.params.productId}`)
      .then(res => res.json())
      .then(result => {
        this.setState({ product: result });
      })
      .catch(error => console.error(error));
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="card border border-light m-4">
          <div
            className="ml-4"
            onClick={() => { this.props.setView('catalog', {}); }}> &lt; Back to catalog </div>
          <div className="card-body">
            <img
              src={this.state.product.image.toString()}
              className="col-sm-4 pr-4 card-img-top float-left object-fit p-2" alt=""></img>
            <h3 className="card-title">{this.state.product.name}</h3>
            <div className="card-subtitle">{this.props.convertToDollars(this.state.product.price)}</div>
            <div className="card-text">{this.state.product.shortDescription}</div>
          </div>
          <div className="card-text pb-4 px-4">{this.state.product.longDescription}</div>
        </div>
      );
    }
  }
}
export default ProductDetails;
