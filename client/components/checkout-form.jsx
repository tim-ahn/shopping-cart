import React from 'react';
import WarningModal from './warning-modal';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: 0,
      shippingAddress: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCcChange = this.handleCcChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleCcChange(event) {
    this.setState({ creditCard: event.target.value });
  }

  handleAddressChange(event) {
    this.setState({ shippingAddress: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const order = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.placeOrder(order);
    this.setState({ name: '', creditCard: 0, shippingAddress: '' });
  }

  render() {
    return (
      <>
        <WarningModal />
        <div className="container">
          <h1>My Cart</h1>
          <div>Order Total: {this.props.total}</div>
          <form
            onSubmit={this.handleSubmit}
            className="form-group">
            <label htmlFor="name" className="pt-4">Name</label>
            <input
              onChange={this.handleNameChange}
              type="text"
              className="form-control"
              id="name" />
            <label htmlFor="creditCard" className="pt-4">Credit Card</label>
            <input
              onChange={this.handleCcChange}
              type="number" className="form-control" id="creditCard" />
            <label htmlFor="shippingAddress" className="pt-4">Shipping Address</label>
            <textarea
              onChange={this.handleAddressChange}
              className="form-control" id="shippingAddress" cols="30" rows="10"></textarea>
            <div className="row pt-2">
              <div className="col">
                <div onClick={() => { this.props.setView('catalog'); }}> &lt; Back to catalog </div>
              </div>
              <div className="col">
                <button
                  onClick={() => this.props.placeOrder()}
                  type="submit" className="btn btn-primary">Place Order</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
