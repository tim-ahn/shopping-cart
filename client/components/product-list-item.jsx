import React from 'react';

class ProductListItem extends React.Component {

  render() {
    return (
      <div className="container col-md-4">
        <div className="card card-width">
          <div className="image-container">
            <img src={this.props.image} className="card-img-top img-dimensions" alt=""></img>
          </div>

          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <h6 className="card-subtitle">{this.props.price}</h6>
            <p className="card-text">{this.props.shortDescription}</p>
          </div>

        </div>

      </div>

    );

  }
}
export default ProductListItem;
