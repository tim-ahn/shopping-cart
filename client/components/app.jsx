import React from 'react';
import ProductDetails from './product-details';
import ProductList from './product-list';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import WarningModal from './warning-modal';
import HeroUnit from './hero-unit';
import NavBar from './navbar';
import ContactPage from './contact';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'home',
        params: {}
      },
      cart: [],
      totalPrice: ''
    };
    this.setView = this.setView.bind(this);
    this.convertToDollars = this.convertToDollars.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.setTotalPrice = this.setTotalPrice.bind(this);
  }

  setView(name, params) {
    this.setState({ view: { name: name, params: params } });
  }

  convertToDollars(price) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    const convertedPrice = formatter.format(price / 100);
    return convertedPrice;
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => {
        this.setState({ cart: data });
      });
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId: product.productId })
    })
      .then(res => res.json())
      .then(data => {
        const currentCart = this.state.cart.slice();
        currentCart.push(data);
        this.setState({ cart: currentCart });
      });
  }

  placeOrder(orderDetails) {
    const order = {
      name: orderDetails.name,
      creditCard: orderDetails.creditCard,
      shippingAddress: orderDetails.shippingAddress
    };
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        this.setView('catalog', {});
        this.setState({ cart: [] });
      })
      .catch(err => this.setState({ message: err.message }));
  }

  setTotalPrice(price) {
    this.setState({ totalPrice: price });
  }

  componentDidMount() {
    this.getCartItems();
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    let pageView;
    if (this.state.view.name === 'home') {
      pageView =
      <HeroUnit
        setView={this.setView}/>;
    } else if (this.state.view.name === 'catalog') {
      pageView =
      <ProductList
        convertToDollars={this.convertToDollars}
        setView={this.setView}/>;
    } else if (this.state.view.name === 'contact') {
      pageView =
      <ContactPage />;
    } else if (this.state.view.name === 'details') {
      pageView =
      <ProductDetails
        convertToDollars={this.convertToDollars}
        params={this.state.view.params}
        setView={this.setView}
        addToCart={this.addToCart}/>;
    } else if (this.state.view.name === 'cart') {
      pageView =
      <CartSummary
        cartItems={this.state.cart}
        convertToDollars={this.convertToDollars}
        setView={this.setView}
        setTotalPrice={this.setTotalPrice}/>;
    } else if (this.state.view.name === 'checkout') {
      pageView =
      <CheckoutForm
        setView={this.setView}
        placeOrder={this.placeOrder}
        total={this.state.totalPrice}/>;
    }
    return (<>
      <NavBar
        cartItemCount={this.state.cart.length}
        setView={this.setView}
        orderTotal={this.state.totalPrice}/>
      <WarningModal />
      {pageView}
    </>);
  }
}
