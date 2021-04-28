import React from 'react';
import { Button } from 'reactstrap';
import ShoppingCart from '../shoppingcart/ShoppingCart';
import Auth from '../modals/Auth';

function Navbar(props) {

    const {
        setIsMarket,
        setIsMyStore,
        updateToken,
        clearToken,
        token
    } = props;

    const loadMarket = (e) => {
        setIsMarket(true);
        setIsMyStore(false);
    }

    const loadMyStore = (e) => {
        setIsMarket(false);
        setIsMyStore(true);
    }

    return(
        <div className = "navbar">
            <ShoppingCart buttonLabel = {"Cart"} className = {"shoppingCart"} token = {token}/>
            <Auth buttonLabel = {"Login / Signup"} className = {"Login"} updateToken={updateToken} clearToken={clearToken} />
            <Button onClick = {loadMarket}>Market</Button>
            <Button onClick = {loadMyStore}>My Store</Button>
        </div>
    );
}

export default Navbar;