/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './header';
import ProductDetails from './product-details';
import ProductList from './product-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({ view: { name: name, params: params } });
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {

    let pageView;
    if (this.state.view.name === 'catalog') {
      return this.state.isLoading
        ? <h1>Testing connections...</h1>
        : <div>
          <Header />
          <ProductList setView={this.setView}/>
        </div>;
    } else if (this.state.view.name === 'details') {
      // render product details component
      return this.state.isLoading
        ? <h1>Testing connections...</h1>
        : <div>
          <Header />
          <ProductDetails
            params={this.state.view.params}
            setView={this.setView}
          />
        </div>;
    }
  }
}
export default App;
