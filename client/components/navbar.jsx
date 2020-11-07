import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if (this.state.isOpen === true) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  }

  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="ml-2" href="/">The Gallery</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="ml-3">
                <NavLink onClick={() => { this.props.setView('catalog'); }}>All Products</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="m-1 mr-3">
              <button type="button" className="btn btn-success" onClick={() => { this.props.setView('cart'); }}>Cart: {this.props.cartItemCount}</button>
            </NavbarText>
          </Collapse>
        </Navbar>
      </>
    );
  }
}
