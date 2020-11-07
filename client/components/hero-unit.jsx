import React from 'react';
import { Jumbotron } from 'reactstrap';

export default class HeroUnit extends React.Component {
  render() {
    return (
      <div className="">
        <Jumbotron>
          <h1 className="display-3">The Gallery</h1>
          <p className="lead">The premier source of Scotty Cameron Putters, Apparel, and Accessories.</p>
        </Jumbotron>
      </div>
    );
  }
}
