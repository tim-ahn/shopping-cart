import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="card container ">

        <div className="row d-flex">
          <div className="col-sm-2 float-left">{this.props.image}</div>
          <div className="col-sm-10 float-right">
            <h3 className="card-title">{this.props.name}</h3>
            <div className="card-subtitle">{this.props.price}</div>
            <div className="card-text">{this.props.shortDescription}</div>
          </div>
        </div>
      </div>
    );
  }
}
