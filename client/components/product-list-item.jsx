import React from 'react';

class ProductListItem extends React.Component {

  render() {
    return (
      <div
        className="card"
        onClick={() => { this.props.setView('details', { productId: this.props.product.productId }); }}
        style={{ width: '18rem', height: '18rem' }}>
        <img src={this.props.product.image.toString()} style={{ height: '100px' }} className="card-img-top object-fit" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <h6 className="card-subtitle">{this.props.convertToDollars(this.props.product.price)}</h6>
          <p className="card-text">{this.props.product.shortDescription}</p>
        </div>
      </div>
    );
  }
}
export default ProductListItem;
