import React from 'react';
import { Jumbotron } from 'reactstrap';

export default class HeroUnit extends React.Component {
  render() {
    return (
      <div className="">
        <Jumbotron>
          <h1 className="display-3">The Gallery</h1>
          <p className="lead">The premier source of Scotty Cameron Putters, Apparel, and Accessories.</p>
          <hr className="my-2" />
          <p>Access to The Gallery is limited to registered members only.</p>
          <p className="lead">
            <button className="btn btn-primary" onClick={() => { this.props.setView('contact'); }}>Join Us</button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
