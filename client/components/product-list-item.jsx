import React from 'react';

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // { view: { name: name, params: params } }
    this.props.setView('details', this.props.item.productId);
  }

  render() {
    return (
      <div
        className="card" onClick={this.handleClick} style={{ width: '18rem', height: '18rem' }}>
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
