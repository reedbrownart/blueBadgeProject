import React, { useState } from "react";
import Product from "../maincomponents/Product";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label} from "reactstrap";

function ShoppingCart(props) {
  const { buttonLabel, className, user } = props;
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

const [cartItems, setCartItems] = useState([]);


  const testArray = [1,2,3];

  const [shoppingCart, setShoppingCart] = useState([]);

  // const displayShoppingCart = () => {
   
  //    fetch("https://blue-badge-agora-server.herokuapp.com/user/returnshoppingcart/1")
  //      .then((res) => res.json())
  //      .then((data) => {
  //       //setShoppingCart(data.shoppingCartArray)
  //      console.log(data.shoppingCartArray);
  //      })
  //      console.log(shoppingCart);

    
  // }
  let testShoppingCart = [
    {
      "id": 14,
      "productName": "Flip Flops",
      "price": 15,
      "description": "Regular shoes",
      "stock": 300,
      "imageURL": "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg",
      "createdAt": "2021-04-27T22:48:16.219Z",
      "updatedAt": "2021-04-27T22:48:16.219Z",
      "storeId": 8
  },
  {
      "id": 15,
      "productName": "Flop flips",
      "price": 15,
      "description": "WOAH. What did you do? Change it back?",
      "stock": 300,
      "imageURL": "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg",
      "createdAt": "2021-04-27T22:48:41.456Z",
      "updatedAt": "2021-04-27T22:48:41.456Z",
      "storeId": 8
  },
  {
      "id": 16,
      "productName": "Riley's Profile Picture from Zoom",
      "price": 15,
      "description": "But it's printed out and we frame it for you.",
      "stock": 300,
      "imageURL": "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg",
      "createdAt": "2021-04-27T22:49:41.361Z",
      "updatedAt": "2021-04-27T22:49:41.361Z",
      "storeId": 8
  },
  {
      "id": 17,
      "productName": "Inexplicable Trinket",
      "price": 15,
      "description": "It's as useful an item as this text is a description",
      "stock": 300,
      "imageURL": "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg",
      "createdAt": "2021-04-27T22:50:12.442Z",
      "updatedAt": "2021-04-27T22:50:12.442Z",
      "storeId": 8
  },
  ]


//need to make the IMG SMALLER

  function mappingCart() {
    return( testShoppingCart.map((sci, index) => {
      return(
        <div key={index}>
            <h3>{sci.productName}</h3>
            <p>{sci.description}</p>
            <img src= {sci.imageURL}/>  
            <h5>Price: ${sci.price}</h5>
        </div>
      )
    })

    )
  }

  

  return (
    <div>
      <Button color="danger" onClick={toggle}>
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
