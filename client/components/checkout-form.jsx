import React from 'react';
import WarningModal from './warning-modal';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      creditCard: 0,
      shippingAddress: '',
      streetAddress: '',
      streetAddress2: '',
      city: '',
      stateProvince: '',
      zip: ''
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleCcChange = this.handleCcChange.bind(this);
    this.handleStreetAddressChange = this.handleStreetAddressChange.bind(this);
    this.handleStreetAddress2Change = this.handleStreetAddress2Change.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateProvinceChange = this.handleStateProvinceChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleCcChange(event) {
    this.setState({ creditCard: event.target.value });
  }

  handleStreetAddressChange(event) {
    this.setState({ streetAddress: event.target.value });
  }

  handleStreetAddress2Change(event) {
    this.setState({ streetAddress2: event.target.value });
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }

  handleStateProvinceChange(event) {
    this.setState({ stateProvince: event.target.value });
  }

  handleZipChange(event) {
    this.setState({ zip: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const order = {
      name: this.state.firstName + ' ' + this.state.lastName,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.streetAddress + ' ' + this.state.streetAddress2 + ' ' + this.state.city + ' ' + this.state.stateProvince + ' ' + this.state.zip
    };
    this.props.placeOrder(order);
    this.setState({
      firstName: '',
      lastName: '',
      creditCard: 0,
      shippingAddress: '',
      streetAddress: '',
      streetAddress2: '',
      city: '',
      stateProvince: '',
      zip: ''
    });
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

            <label htmlFor="name" className="pt-4">First Name</label>
            <input
              onChange={this.handleFirstNameChange}
              type="text"
              className="form-control"
              id="firstName" />

            <label htmlFor="name" className="pt-4">Last Name</label>
            <input
              onChange={this.handleLastNameChange}
              type="text"
              className="form-control"
              id="lastName" />

            <label htmlFor="creditCard" className="pt-4">Credit Card</label>
            <input
              onChange={this.handleCcChange}
              type="number" className="form-control" id="creditCard" />

            <label htmlFor="streetAddress" className="pt-4">Street Address</label>
            <input
              onChange={this.handleStreetAddressChange}
              type="text"
              className="form-control"
              id="streetAddress" />

            <label htmlFor="streetAddress2" className="pt-4">Street Address 2</label>
            <input
              onChange={this.handleStreetAddress2Change}
              type="text"
              className="form-control"
              id="streetAddress2" />

            <label htmlFor="city" className="pt-4">City</label>
            <input
              onChange={this.handleCityChange}
              type="text"
              className="form-control"
              id="city" />

            <label htmlFor="state" className="pt-4">State</label>
            <input
              onChange={this.handleStateProvinceChange}
              type="text"
              className="form-control"
              id="state" />

            <label htmlFor="zip" className="pt-4">ZIP Code</label>
            <input onChange={this.handleZipChange}
              type="number"
              className="form-control"
              id="zip" />

            <div className="row pt-2 checkoutButtons">
              <div className="col">
                <button onClick={() => this.props.setView('catalog')}
                  type="submit" className="btn btn-secondary center">Back to Catalog</button>
              </div>
              <div className="col">
                <button onClick={this.handleSubmit}
                  type="submit" className="btn btn-primary center">Place Order</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
