import React from 'react';
import Auth from './Auth';
import Market from '../market/Market';
import MyStore from '../mystore/MyStore';
import ShoppingCart from '../shoppingcart/ShoppingCart';

function Display() {
    return(
        <div>
            <Auth />
            <Market />
            <MyStore />
          
        </div>
    );
}

export default Display;