import React from 'react';

class ProductListItem extends React.Component {

  render() {
    return (
      <div className="container col m-2 ">
        <div className="card ">
          <div className="image-container obj-fit">
            <img src={this.props.image} className="card-img-top " alt=""></img>
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
