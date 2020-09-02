/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './header';
import ProductDetails from './product-details';
import ProductList from './product-list';
import CartSummaryItem from './cart-summary-item';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.convertToDollars = this.convertToDollars.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
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
    // .catch(err => this.setState({ message: err.message }));
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
    if (this.state.view.name === 'catalog') {
      pageView =
      <ProductList
        convertToDollars={this.convertToDollars}
        setView={this.setView}/>;
    } else if (this.state.view.name === 'details') {
      pageView =
      <ProductDetails
        convertToDollars={this.convertToDollars}
        params={this.state.view.params}
        setView={this.setView}
        addToCart={this.addToCart}
      />;

    }
    return (<>
      <Header cartItemCount={this.state.cart.length}/>
      {pageView}

    </>);
  }
}
export default App;
