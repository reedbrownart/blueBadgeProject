import React from 'react';
import { Button } from 'reactstrap';
import ShoppingCart from '../modals/ShoppingCart';
import Auth from '../modals/Auth';

function Navbar(props) {

    const {
        setIsMarket,
        setIsMyStore
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
            <ShoppingCart buttonLabel = {"Cart"} className = {"modal"}/>
            <Auth buttonLabel = {"Login / Signup"} className = {"modal"}/>
            <Button onClick = {loadMarket}>Market</Button>
            <Button onClick = {loadMyStore}>My Store</Button>
        </div>
    );
}

export default Navbar;