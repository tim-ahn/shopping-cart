import React from 'react';

function ProductListItem(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top scale-down" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle">{props.price}</h6>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>
  );
}
export default ProductListItem;
