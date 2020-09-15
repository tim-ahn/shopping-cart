import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="text-white container-fluid bg-dark mb-4">
        <div>$ Wicked Sales</div>
        <div onClick={() => { this.props.setView('cart'); }}>items in cart: {this.props.cartItemCount}</div>
      </div>
    );
  }
}
export default Header;
