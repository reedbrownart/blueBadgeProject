import React, {useState} from 'react';
import Product from '../maincomponents/Product';

function ShoppingCart(props) {
   //need Product props passed
    const {product} = props;
    const [cartItems, setCartItems] = useState([]);
    const addItem = (product) => {
        const existing = cartItems.find(product.id);
        if(existing) {
            setCartItems(cartItems.map(product.id ? {...existing, qty: existing.qty +1} : product))
        } else {
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    };
    const removeItem = (product) => {
        const existing = cartItems.find(product.id);
        if (existing.qty >= 1) {
            setCartItems(cartItems.filter((x)=> 
            product.id ? {...existing, qty: existing.qty - 1} : product
            ));
        }
    };
    
    return(
        <div className="block col-1">
           <h2>Cart Items</h2>
           <div>
           {cartItems.length === 0 && <div>Cart is empty</div>}
           {cartItems.map((product) => (
               <div className={product.id} id="row">
                   <div className="col=2">{product.name}</div>
                   <div className="col-2">
                       <button onClick={() => removeItem(product)} className="remove">
                           -
                       </button>
                       <button onClick={() => addItem(product)} className="add">
                           +
                       </button>
                   </div>
               </div>
               
           ))}
            </div>
            <div className="row">
                <button onClick={() => alert('Thank you for shopping with Agora!')}>
                    Checkout!
                </button>

            </div>
        </div>
    );
}

export default ShoppingCart;