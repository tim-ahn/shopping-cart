import React from 'react';

class ProductListItem extends React.Component {

  render() {
    return (
      <div
        className="card"
        style={{ width: '18rem', height: '18rem' }}
        onClick={ () => {
          this.props.setView({
            name: 'details',
            params: {
              productId: this.props.products.productId
            }
          });
        }}>
        <img src={this.props.image} style={{ height: '100px' }} className="card-img-top object-fit" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <h6 className="card-subtitle">{this.props.price}</h6>
          <p className="card-text">{this.props.shortDescription}</p>
        </div>
      </div>
    );
  }
}
export default ProductListItem;
