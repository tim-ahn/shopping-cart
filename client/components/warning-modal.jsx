import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class WarningModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if (this.state.modal === true) {
      this.setState({ modal: false });
    }
  }

  componentWillUnmount() {
    this.setState({ modal: true });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal}>
          <ModalHeader className="text-warning">WARNING!</ModalHeader>
          <ModalBody>
            This site is a demo and no real purchases will be made. Do not use personal information on this site.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" id="modal" onClick={this.toggle}>I Accept</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
