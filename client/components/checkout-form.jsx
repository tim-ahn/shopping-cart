import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: 0,
      shippingAddress: ''
    };
  }

  render() {
    return (
      <div className="container">
        <h1>My Cart</h1>
        <div>Order Total: {this.props.total}</div>
        <form className="form-group">
          <label htmlFor="name" className="pt-4">Name</label>
          <input type="text" className="form-control" id="name"/>

          <label htmlFor="creditCard" className="pt-4">Credit Card</label>
          <input type="number" className="form-control" id="creditCard" />

          <label htmlFor="shippingAddress" className="pt-4">Shipping Address</label>
          <textarea className="form-control" id="shippingAddress" cols="30" rows="10"></textarea>
          <div className="row pt-2">
            <div className="col">
              <div onClick={() => { this.props.setView('catalog'); }}> &lt; Back to catalog </div>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">Place Order</button>
            </div>

          </div>

        </form>
      </div>
    );
  }
}
