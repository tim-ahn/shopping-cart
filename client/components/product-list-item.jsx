import React from 'react';

function ProductListItem(props) {
  return (
    <div className="col-md-4">
      <div className="card card-width">
        <div className="image-container">
          <img src={props.image} className="card-img-top img-dimensions" alt=""></img>
        </div>

        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle">{props.price}</h6>
          <p className="card-text">{props.shortDescription}</p>
        </div>

      </div>

    </div>

  );
}
export default ProductListItem;
