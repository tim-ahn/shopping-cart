import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card card-width">
        <img src="/images/shake-weight.jpg" className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle grey">$0.00</h6>
          <p className="card-text">lorm</p>
        </div>
      </div>
    );
  }
}
export default ProductListItem;
