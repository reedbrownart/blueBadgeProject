import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form} from 'reactstrap';
import APIURL from './helpers/environment';

function DeleteStore(props) {

  const {
    buttonLabel,
    className,
    token,
    storeID,
    storeName,
    fetcher
  } = props;

  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/store/${storeID}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        fetcher();
        toggle();
      })
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>Are you sure you want to delete {storeName}?</ModalHeader>
        <ModalBody>
            <h6>Deleting your store will also delete all of your product listings.</h6>
            <h4>This action <b>CANNOT</b> be undone.</h4>
          <Form>
            <Button type="submit" color="danger" onClick={handleSubmit}>DELETE My Store</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default DeleteStore;