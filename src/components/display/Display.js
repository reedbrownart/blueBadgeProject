import React from 'react';
import Market from './market/Market';
import MyStore from './mystore/MyStore';

function Display(props) {
    const {
        isMarket,
        isMyStore,
        updateToken
    } = props;

    return(
        <div className = "display">
            {isMarket
                ? <Market updateToken = {updateToken} />
            : isMyStore
                ? <MyStore />
                : <></>}
        </div>
    );
}

export default Display;