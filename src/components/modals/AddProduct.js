import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,
  Label, Input
} from 'reactstrap';

function AddProduct(props) {

  const {
    buttonLabel,
    className
  } = props;

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [imageURL, setImageURL] = useState('');


  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/product/create', {
      method: 'POST',
      body: JSON.stringify({ log: { productName, price, description, stock, imageURL } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + props.token
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
              <Label htmlFor='productName'>Product Name</Label>
              <Input name='productName' value={productName}
                onChange={(e) => setProductName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='price'>Price</Label>
              <Input name='price' value={price}
                onChange={(e) => setPrice(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='description'>Description</Label>
              <Input type="textarea" name='description' value={description}
                onChange={(e) => setDescription(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='stock'>Stock</Label>
              <Input name='stock' value={stock}
                onChange={(e) => setStock(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='imageURL'>Stock</Label>
              <Input name='imageURL' value={imageURL}
                onChange={(e) => setImageURL(e.target.value)} />
            </FormGroup>
            <Button type="submit" color="primary" onClick={toggle}>Post listing</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddProduct;