import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div
        className="card m-2 min-card zoom"
        onClick={() => { this.props.setView('details', { productId: this.props.product.productId }); }}>
        <img
          src={this.props.product.image.toString()}
          className="card-img-top object-fit p-2"
          alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <h6 className="card-subtitle">{this.props.convertToDollars(this.props.product.price)}</h6>
          <p className="card-text">{this.props.product.shortDescription}</p>
        </div>
      </div>
    );
  }
}
