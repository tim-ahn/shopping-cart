import React from 'react';
import { Jumbotron } from 'reactstrap';

export default class HeroUnit extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="display-3">Fun Stuff Corp.</h1>
        <p className="lead">The premier online retailer of fun stuff.</p>
      </Jumbotron>
    );
  }
}
