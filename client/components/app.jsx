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
        name: 'details',
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
      pageView =
      <ProductList
        setView={this.setView}/>;
    } else if (this.state.view.name === 'details') {
      pageView =
      <ProductDetails
        productId={this.state.view.params}
        setView={this.setView}/>;
    }
    return (<>
      <Header />
      {pageView}
    </>);
  }
}
export default App;
