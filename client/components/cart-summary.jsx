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
        <div className="container">
          <h1>My Cart</h1>

          {

            this.props.cartItems.map((item, index) => (
              <CartSummaryItem

                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                shortDescription={item.shortDescription}
                convertToDollars={this.props.convertToDollars}
              />
            ))}

          <div>Total Price: {this.props.convertToDollars(cartTotalPrice)}</div>

        </div>
      );
    }
    return (
      <div className="container">
        <h1>My Cart</h1>
        <div>Your cart is empty.</div>
      </div>
    );
  }
}
