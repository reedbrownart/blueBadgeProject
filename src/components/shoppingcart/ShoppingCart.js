import React, { useState } from "react";
import Product from "../maincomponents/Product";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ShoppingCart(props) {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [cartItems, setCartItems] = useState([]);

  // const addItem = (product) => {
  //     const existing = cartItems.find(product.id);
  //     if(existing) {
  //         setCartItems(cartItems.map(product.id ? {...existing, qty: existing.qty +1} : product))
  //     } else {
  //         setCartItems([...cartItems, {...product, qty: 1}]);
  //     }
  // };
  // const removeItem = (product) => {
  //     const existing = cartItems.find(product.id);
  //     if (existing.qty >= 1) {
  //         setCartItems(cartItems.filter((x)=>
  //         product.id ? {...existing, qty: existing.qty - 1} : product
  //         ));
  //     }
  // };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={ShoppingCart}>
        <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
        <ModalBody>
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((product) => (
            <div className={product.id} id="row">
              <div className="col=2">{product.name}</div>
              <div className="col-2"></div>
            </div>
          ))}
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
