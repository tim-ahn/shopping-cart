import React from 'react';

function ProductListItem(props) {
  return (
    <div className="col-md-4">
      <div className="card card-width">
        <img src={props.image} className="card-img-top contain" alt=""></img>
        <div className="card-body text-container">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle">{props.price}</h6>
          <p className="card-text">{props.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductListItem;
