import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }));

  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm'>
            <ProductListItem />
          </div>
          <div className='col-sm'>
            <ProductListItem />
          </div>
          <div className='col-sm'>
            <ProductListItem />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm'>
            <ProductListItem />
          </div>
          <div className='col-sm'>
            <ProductListItem />
          </div>
          <div className='col-sm'>
            <ProductListItem />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm'>
            <ProductListItem />
          </div>
          <div className='col-sm'>
            <ProductListItem />
          </div>
          <div className='col-sm'>
            <ProductListItem />
          </div>
        </div>

      </div>
    );
  }
}
export default ProductList;
