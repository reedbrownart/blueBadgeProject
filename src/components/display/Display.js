import React from 'react';
import Market from './market/Market';
import MyStore from './mystore/MyStore';

function Display(props) {
    const {
        isMarket,
        isMyStore,
        updateToken,
        token
    } = props;

    return(
        <div className = "display">
            {isMarket
                ? <Market updateToken = {updateToken} />
            : isMyStore
                ? <MyStore token = {token}/>
                : <></>}
        </div>
    );
}

export default Display;