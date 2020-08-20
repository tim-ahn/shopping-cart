import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      price: null,
      image: null,
      shortDescription: null
    };
    this.getProductDetails = this.getProductDetails.bind(this);
    this.convertToDollars = this.convertToDollars.bind(this);
  }

  getProductDetails(id) {
    fetch('/api/products/' + id)
      .then(res => res.json())
      .then(result => {
        // eslint-disable-next-line no-console
        console.log(result);
        this.setState({
          name: result[0].name,
          price: result[0].price,
          image: result[0].image,
          shortDescription: result[0].shortDescription,
          longDescription: result[0].longDescription
        });

      })
      .catch(error => console.error(error));
  }

  convertToDollars(price) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    const convertedPrice = formatter.format(price / 100);
    return convertedPrice;
  }

  componentDidMount() {
    this.getProductDetails(this.props.productId);
  }

  render() {
    return (
      <div className="card border border-light m-4">

        <div className="card-body">
          <img src={this.state.image} className="col-sm-4 pr-4 card-img-top float-left object-fit p-2" alt=""></img>
          <h3 className="card-title">{this.state.name}</h3>
          <div className="card-subtitle">{this.convertToDollars(this.state.price)}</div>
          <div className="card-text">{this.state.shortDescription}</div>

        </div>
        <div className="card-text pb-4 px-4">{this.state.longDescription}</div>

      </div>

    );
  }
}
export default ProductDetails;
