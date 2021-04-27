import React from 'react';
import Market from './market/Market';
import MyStore from './mystore/MyStore';

function Display(props) {
    const {
        isMarket,
        isMyStore
    } = props;

    return(
        <div className = "display">
            {isMarket
                ? <Market updateToken = {props.updateToken} />
            : isMyStore
                ? <MyStore />
                : <></>}
        </div>
    );
}

export default Display;