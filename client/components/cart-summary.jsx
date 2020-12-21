import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  render() {
    let cartTotalPrice = 0;
    for (let i = 0; i < this.props.cartItems.length; i++) {
      cartTotalPrice += this.props.cartItems[i].price;
    }
    if (this.props.cartItems.length > 0) {
      return (
        <div className="container my-4">
          <h1>My Cart</h1>
          {this.props.cartItems.map((item, index) => (
            <CartSummaryItem
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              shortDescription={item.shortDescription}
              convertToDollars={this.props.convertToDollars}
            />
          ))}
          <div className="container-fluid">
            <div className="row pt-2">
              <div
                className="col-6 text-center" style={{ fontSize: '1.3rem' }}
              >Total Price: {this.props.convertToDollars(cartTotalPrice)}</div>
              <div className="col-6 text-center">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    this.props.setTotalPrice(this.props.convertToDollars(cartTotalPrice));
                    this.props.setView('checkout', {});
                  }}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <h1 className="pt-2">Your Cart</h1>
        <div className="py-2">...is empty.</div>
        <button className="btn btn-primary" onClick={() => { this.props.setView('catalog'); }}>Back to Products </button>
      </div>
    );
  }
}
