import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card card-width product-card">
        <img src="/images/shake-weight.jpg" className="card-img-top product-image" alt=""></img>
        <div className="card-body">
          <h5 className="card-title product-name">Shake Weight</h5>
          <h6 className="card-subtitle product-price">$29.99</h6>
          <p className="card-text product-description">Dynamic Inertia technology ignites muscles in arms, shoulers, and chest.</p>
        </div>
      </div>
    );
  }
}
export default ProductListItem;
