import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form} from 'reactstrap';
import APIURL from '../../helpers/environment';

const DeleteProduct = (props) => {
  const {
    buttonLabel,
    className,
    fetcher,
    productId,
    productName,
    token
  } = props;


  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/product/${productId}`, { 
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
        <ModalHeader>Delete {productName}?</ModalHeader>
        <ModalBody>
            <Form>
                <Button type="submit" color="danger" onClick={handleSubmit}>Delete Product</Button>
                <Button color="secondary" onClick={toggle} >Cancel Action</Button>
            </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default DeleteProduct;