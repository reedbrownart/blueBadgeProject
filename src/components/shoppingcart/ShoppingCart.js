import React, { useEffect, useState } from "react";
import Product from "../maincomponents/Product";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from "reactstrap";
import APIURL from '../../helpers/environment';

function ShoppingCart(props) {
  const { buttonLabel, className, token } = props;

  const userToken = localStorage.getItem("token");

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [productsArray, setProductsArray] = useState([]);

  async function fetchShoppingCart(e) {
    e.preventDefault();

    fetch(`${APIURL}/user/returnshoppingcart/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => res.json())
      .then((data) => setShoppingCart(data.shoppingCartArray))

    toggle();
  }

  useEffect(() => {
    shoppingCart.map(productID => {
      fetch(`${APIURL}/product/${productID}`)
        .then((res) => res.json())
        .then((data) => setProductsArray(productsArray => [...productsArray, data[0]]))
    })
  }, [shoppingCart])
  console.log(productsArray);

  function mappingCart() {
    return (productsArray.map((sci, index) => {
      return (
        <div key={index}>
          <h3>{sci.productName}</h3>
          <img src={sci.imageURL} width="100" />
          <h5>Price: ${sci.price}</h5>
        </div>
      )
    }))
  }

  const checkOut = () => {
    fetch(`${APIURL}/user/checkout/`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toggle();
    alert("Thank you for shopping with Agora!")

  }

  return (
    <div>
      <Button color="danger" onClick={fetchShoppingCart}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={ShoppingCart}>
        <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
        <ModalBody>

          {mappingCart()}

        </ModalBody>
        <ModalFooter>
          <Button onClick={() => checkOut()}>
            Checkout
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ShoppingCart;