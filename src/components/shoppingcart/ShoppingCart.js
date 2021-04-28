import React, { useEffect, useState } from "react";
import Product from "../maincomponents/Product";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from "reactstrap";

function ShoppingCart(props) {
  const { buttonLabel, className } = props;

  const userToken = localStorage.getItem("token");

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [productsArray, setProductsArray] = useState([]);

  // const fetchItems = () => {
  //   fetch("https://blue-badge-agora-server.herokuapp.com/user/returnshoppingcart/1")
  //     .then((res) => res.json())
  //     .then((data) => setShoppingCart(data.shoppingCartArray))
  // }

  async function fetchShoppingCart(e) {
    e.preventDefault();

    fetch(`https://blue-badge-agora-server.herokuapp.com/user/returnshoppingcart/1`)
      .then((res) => res.json())
      .then((data) => setShoppingCart(data.shoppingCartArray))

    toggle();
  }

  useEffect(() => {
     shoppingCart.map(productID => {
      fetch(`https://blue-badge-agora-server.herokuapp.com/product/${productID}`)
        .then((res) => res.json())
        .then((data) => setProductsArray(productsArray => [...productsArray, data[0]]))
   })}, [shoppingCart])

  return (
    <div>
      <Button color="danger" onClick={fetchShoppingCart}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={ShoppingCart}>
        <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
        <ModalBody>



        </ModalBody>
        <ModalFooter>
          <Button onClick={() => alert("Thank you for shopping with Agora!")}>
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
