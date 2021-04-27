import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,
  Label, Input
} from 'reactstrap';

function AddProduct(props) {

  const {
    buttonLabel,
    className,
    token,
    userId
  } = props;

  const [storeName, setStoreName] = useState('');
  const [storeLocation, setStoreLocation] = useState('');
  const [storeDescription, setStoreDescription] = useState('');


  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://blue-badge-agora-server.herokuapp.com/store/' + userId, {
      method: 'PUT',
      body: JSON.stringify({ storeName, storeLocation, storeDescription }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
      })
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='storeName'>Store Name</Label>
              <Input name='storeName' value={storeName}
                onChange={(e) => setStoreName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='storeLocation'>Store Location</Label>
              <Input name='storeLocation' value={storeLocation}
                onChange={(e) => setStoreLocation(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='storeDescription'>Store Description</Label>
              <Input type="textarea" name='storeDescription' value={storeDescription}
                onChange={(e) => setStoreDescription(e.target.value)} />
            </FormGroup>
            <Button type="submit" color="primary" onClick={toggle}>Confirm store changes</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddProduct;