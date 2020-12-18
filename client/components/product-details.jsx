import React from 'react';

export default class ProductDetails extends React.Component {
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
        <>
          <div className="px-4 pt-4 text-center">
            <button
              className="btn btn-warning"
              onClick={() => { this.props.setView('catalog', {}); }}>Back to Products</button>
          </div>
          <div
            className=" border border-light m-4 text-center">
            <div className="card-body">
              <img
                src={this.state.product.image.toString()}
                className="card-img-top float-left product-detail pb-2" alt="Card image cap"></img>
              <h3 className="card-title ">{this.state.product.name}</h3>
              <div
                className="card-subtitle pb-2"
                style={{ fontSize: '1.3rem' }}>{this.props.convertToDollars(this.state.product.price)}</div>

              <div className="card-text">{this.state.product.longDescription}</div>
              <div className="pt-4">
                <button
                  className="btn btn-success"
                  onClick={() => { this.props.addToCart(this.state.product); }}
                >Add to Cart</button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
